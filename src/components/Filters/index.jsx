import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import FilterForCategory from "./FilterForCategory";
import FilterButton from "./FilterButton";
import StyledContainer from "./style";

const Filters = () => {
  const { listFilters, showCategories } = useContext(ProductsContext);

  const filterCategories =
    listFilters &&
    listFilters[0] &&
    listFilters[0].filter((filter) => filter.id === "category");

  return (
    <StyledContainer>
      <FilterButton />
      {showCategories &&
        filterCategories[0]?.values.length > 0 &&
        filterCategories && <FilterForCategory />}
    </StyledContainer>
  );
};

export default Filters;
