import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import FilterForCategory from "./FilterForCategory";
import FilterForPrice from "./FilterForPrice";
import StyledContainer from "./style";

const Filters = () => {
  const { showCategories } = useContext(ProductsContext);

  return (
    <StyledContainer>
      <FilterForPrice />
      {showCategories && <FilterForCategory />}
    </StyledContainer>
  );
};

export default Filters;
