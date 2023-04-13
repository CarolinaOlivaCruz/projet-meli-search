import React from "react";
import { createContext, useState, useEffect } from "react";
import apiService from "../services/api";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
  
  const getItem = async (id) => {
    try {
      const response = await apiService.get(`/items/${id}`);
      const responseDescription = await apiService.get(
        `items/${id}/description`
      );

      setProductDetails({
        ...response.data,
        description: responseDescription.data,
      });

      setModal(true)
    } catch (error) {
      console.error(error);
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
