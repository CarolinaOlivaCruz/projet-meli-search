import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";
import ProductsDetailsModal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { ProductsContext } from "../../provider/productsContext";

const HomePage = () => {
  const {
    modal,
    listProducts,
    setModal,
    setLoading,
    loading,
    getItem,
    productDetails,
    setFilteredProducts,
    currentPage,
    setCurrentPage,
    totalResults,
    resultsPerPage,
    filteredProducts
  } = useContext(ProductsContext);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setFilteredProducts(listProducts);
  }, [listProducts, setFilteredProducts]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const currentPageItems = filteredProducts.slice(startIndex, endIndex);
    setDisplayedItems(currentPageItems);
  }, [filteredProducts, currentPage, resultsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {modal && <ProductsDetailsModal />}
      <Header />
      <StyledContainer>
        {listProducts && listProducts.length > 0 ? (
          <>
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
