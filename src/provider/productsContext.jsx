import React from "react";
import { createContext, useState, useEffect } from "react";
import apiService from "../services/api";

const ProductsContext = createContext({
  listProducts: [],
  setListProducts: () => [],
  setModal: () => {},
  modal: false,
  setLoading: () => {},
  loading: false,
});

const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await apiService.get(
          "/sites/MLA/search?q=:query#json"
        );
        setListProducts(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        listProducts,
        setListProducts,
        setModal,
        modal,
        setLoading,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
