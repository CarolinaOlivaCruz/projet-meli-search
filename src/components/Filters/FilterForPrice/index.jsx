import React, { useContext } from "react";
import { ProductsContext } from "../../../provider/productsContext";
import StyledContainerButtons from "./style";

const FilterForPrice = () => {
  const { sorts, setSelectedSort, showCategories, setShowCategories } =
    useContext(ProductsContext);

  return (
    <StyledContainerButtons>
      {sorts.map((sort) => {
        return (
          <button key={sort.id} onClick={() => setSelectedSort(sort.id)}>
            {sort.name}
          </button>
        );
      })}
      <button onClick={() => setShowCategories(!showCategories)}>
        Categorias
      </button>
    </StyledContainerButtons>
  );
};

export default FilterForPrice;
