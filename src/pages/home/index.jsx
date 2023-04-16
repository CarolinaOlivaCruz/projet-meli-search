import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";
import { ProductsContext } from "../../provider/productsContext";
import ProductsDetailsModal from "../../components/Modal";
import Pagination from "../../components/Pagination";

const HomePage = () => {
  const { modal, filteredProducts, isSearching } = useContext(ProductsContext);
  const [displayedItems, setDisplayedItems] = useState(
    filteredProducts ? filteredProducts.slice(0, 3) : []
  );

  const handleDisplayItems = (itemsToDisplay) => {
    setDisplayedItems(itemsToDisplay);
  };

  return (
    <>
      {modal && <ProductsDetailsModal />}
      <Header />
      <StyledContainer>
        {filteredProducts && filteredProducts.length > 0 ? (
          <>
            <ListProducts items={displayedItems} />
            <Pagination
              list={filteredProducts}
              itemsPerPage={12}
              displayItems={handleDisplayItems}
            />
          </>
        ) : (
          isSearching && <p>Nenhum produto encontrado</p>
        )}
      </StyledContainer>
    </>
  );
};

export default HomePage;
