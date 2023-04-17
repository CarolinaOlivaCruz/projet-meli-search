import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";
import ProductsDetailsModal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { ProductsContext } from "../../provider/productsContext";

const HomePage = () => {
  const {
    listProducts,
    modal,
    loading,
    filteredProducts,
    setFilteredProducts,
    currentPage,
    setCurrentPage,
    totalResults,
    resultsPerPage,
  } = useContext(ProductsContext);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setFilteredProducts(listProducts);
  }, [listProducts, setFilteredProducts]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Calculate the new list of products to be displayed
    const startIndex = (pageNumber - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentPageItems = filteredProducts.slice(startIndex, endIndex);

    setDisplayedItems(currentPageItems);
  };

  useEffect(() => {
    // Calculate the initial list of products to be displayed
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentPageItems = filteredProducts.slice(startIndex, endIndex);

    setDisplayedItems(currentPageItems);
  }, [filteredProducts, currentPage, resultsPerPage]);

  return (
    <>
      {modal && <ProductsDetailsModal />}
      <Header />
      <StyledContainer>
        {listProducts && listProducts.length > 0 ? (
          <>
            {loading && <p>Carregando...</p>}
            <ListProducts items={displayedItems} />
            <Pagination
              handlePageChange={handlePageChange}
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              currentPage={currentPage}
            />
          </>
        ) : (
          <p>{loading ? "Carregando..." : "Nenhum produto encontrado"}</p>
        )}
      </StyledContainer>
    </>
  );
};

export default HomePage;
