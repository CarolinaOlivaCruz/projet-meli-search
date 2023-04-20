import React from "react";
import { createContext, useState, useEffect } from "react";
import apiService from "../services/api";
import { toast } from "react-toastify";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(12);
  const [productDetails, setProductDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);
  const [listFilters, setListFilters] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get(
          `/sites/MLA/search?q=:query&offset=${
            (currentPage - 1) * resultsPerPage
          }&limit=${resultsPerPage}&sort=${selectedSort}&category=${categoryId}`
        );

        setListFilters([response.data.available_filters]);

        const allResults = response.data.results;
        setTotalResults(response.data.paging.total);

        if (currentPage === 1) {
          setListProducts(allResults);
        } else {
          setListProducts((prevProducts) => [...prevProducts, ...allResults]);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        toast.error("¡Ups! Algo salió mal.");
      }
    };

    fetchData();
  }, [currentPage, resultsPerPage, selectedSort, categoryId]);

  const getItem = async (id) => {
    try {
      setLoading(true);
      const response = await apiService.get(`/items/${id}`);
      const responseDescription = await apiService.get(
        `items/${id}/description`
      );

      setProductDetails({
        ...response.data,
        description: responseDescription.data,
      });

      setModal(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("¡Ups! Algo salió mal.");
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        listProducts,
        setListProducts,
        setModal,
        modal,
        setLoading,
        loading,
        getItem,
        productDetails,
        filteredProducts,
        setFilteredProducts,
        currentPage,
        setCurrentPage,
        totalResults,
        setTotalResults,
        resultsPerPage,
        listFilters,
        setSelectedSort,
        setCategoryId,
        showCategories,
        setShowCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
