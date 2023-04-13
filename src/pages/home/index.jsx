import React, { useContext } from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";
import { ProductsContext } from "../../provider/productsContext";
import ProductsDetailsModal from "../../components/Modal";

const HomePage = () => {
  const { modal } = useContext(ProductsContext);

  return (
    <>
    {modal && <ProductsDetailsModal />}
      <Header />
      <StyledContainer>
        <ListProducts />
      </StyledContainer>
    </>
  );
};

export default HomePage;
