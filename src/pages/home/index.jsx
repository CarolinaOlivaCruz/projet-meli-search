import React from "react";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import StyledContainer from "./style";

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <ListProducts />
      </StyledContainer>
    </>
  );
};

export default HomePage;
