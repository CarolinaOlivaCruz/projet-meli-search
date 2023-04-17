import React, { useContext } from "react";
import { ProductsContext } from "../../../provider/productsContext";
import StyledContainerButtons from "./style";

const FilterButtons = () => {
  const { setSelectedSort, showCategories, setShowCategories } =
    useContext(ProductsContext);

  return (
    <StyledContainerButtons>
      <button onClick={() => setSelectedSort("relevance")}>
        Más relevantes
      </button>
      <button onClick={() => setSelectedSort("price_asc")}>Menor precio</button>
      <button onClick={() => setSelectedSort("price_desc")}>
        Mayor Precio
      </button>
      <button onClick={() => setShowCategories(!showCategories)}>
        Categorías
      </button>
    </StyledContainerButtons>
  );
};

export default FilterButtons;
