import ProductDetailsPage from "./content";
import getMetaDataFunction from '../../getMetaData'
export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getMetaDataFunction(params)
  return  metadata
}

const ProductDetailsMobile = () => {
  return <ProductDetailsPage />;
};

export default ProductDetailsMobile;
