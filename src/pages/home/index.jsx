import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";
import ProductsDetailsModal from "../../components/Modal";
import Pagination from "react-js-pagination";
import { ProductsContext } from "../../provider/productsContext";
import ButtonTop from "../../components/ButtonTop";
import Filters from "../../components/Filters";

const HomePage = () => {
  const {
    listProducts,
    modal,
    loading,
    filteredProducts,
    currentPage,
    setCurrentPage,
    totalResults,
    resultsPerPage,
  } = useContext(ProductsContext);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentPageItems = filteredProducts
      ? filteredProducts.slice(startIndex, endIndex)
      : [];

    setDisplayedItems(currentPageItems);
  }, [currentPage, filteredProducts, resultsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {modal && <ProductsDetailsModal />}
      <Header />
      <Filters />
      <StyledContainer>
        {listProducts && listProducts.length > 0 ? (
          <>
            {loading && <p>Carregando...</p>}
            <ListProducts items={displayedItems} />
            {filteredProducts && filteredProducts.length > 0 && (
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultsPerPage}
                totalItemsCount={totalResults}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <>
            {loading ? <p>Carregando...</p> : <p>Nenhum produto encontrado</p>}
          </>
        )}
        <ButtonTop />
      </StyledContainer>
    </>
  );
};

export default HomePage;
