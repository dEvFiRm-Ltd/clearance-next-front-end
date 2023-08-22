import HeaderWithoutSearch from "./HeaderWithoutSearch";
import HeaderWithSearch from "./HeaderWithSearch";
import HeaderCheckout from "./HeaderCheckout";
const Header = ({ loading, collection, categories, checkout, title }) => {
  return (
    <>
      {!collection && !checkout ? (
        <HeaderWithoutSearch loading={loading} />
      ) : checkout ? (
        <HeaderCheckout title={title} />
      ) : (
        <HeaderWithSearch loading={loading} categories={categories} />
      )}
    </>
  );
};

export default Header;
