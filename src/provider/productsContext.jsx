import React from "react";
import { createContext, useState, useEffect } from "react";
import apiService from "../services/api";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await apiService.get(
          "/sites/MLA/search?q=:query#json"
        );
        setListProducts(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };

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
        handleSearchTerm,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
