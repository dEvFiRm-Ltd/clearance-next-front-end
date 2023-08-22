import  CollectionsDesktop from "./content"
import getMetaDataFunction from '../../getMetaData'

export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getMetaDataFunction(params)
  return metadata
}

const ProductsMobile = ( ) => {
  return <CollectionsDesktop />;
};

export default ProductsMobile;
