import axois from 'axios';

const getMetaDataFunction = async ({ slug }: any) => {
  const defaultDescription =
    '<p><strong>Clearance is the ecommerce version  and the online operational name of Master out';
  const defaultTitle = 'Welcome To Clearance';

  const seo = await axois
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/v10/products/details/${slug}`)
    .then((res) => {
      return res.data.data;
    });
  const seoProduct = {
    title: seo?.name,
    description: seo?.description,
    images: seo?.images,
    icon: seo?.thumbnail,
  };

  return {
    title: seoProduct?.title || defaultTitle,
    description: seoProduct?.description || defaultDescription,
    openGraph: {
      images: seoProduct?.images || [],
      icons: {
        icon: seoProduct?.icon,
      },
    },
  };
};

export default getMetaDataFunction;

