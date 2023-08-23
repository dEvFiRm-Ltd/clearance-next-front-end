
import axios from 'axios'
const getMetaDataFunction = async ({ params }) => {
    const defaultDescription =
        "<p><strong>Clearance is the ecommerce version  and the online operational name of Master out";
    const defaultTitle = "Welcome To Clearance";
    let seoProduct = {
        title: null,
        description: null,
    };

    const decodedParams = decodeURIComponent(params);
    if (decodedParams && decodedParams.length > 0) {
        const parts = decodedParams.split("&");

        for (const part of parts) {
            const [key, value] = part.split("=");
            if (key === "category") {
                const seo = await axios
                    .get(`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}api/v10/products?category=${value}`)
                    .then((res) => {
                        return res.data.data;
                    });

                if (seo?.category_title) {
                    seoProduct.title = seo.category_title;
                }
                if (seo?.category_seo_description) {
                    seoProduct.description = seo.category_seo_description;
                }
            }
        }
    }

    return {
        title: seoProduct?.title || defaultTitle,
        description: seoProduct?.description || defaultDescription,
    };
};

export default getMetaDataFunction;