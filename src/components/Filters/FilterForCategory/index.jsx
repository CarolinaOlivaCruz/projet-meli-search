import React, { useContext } from "react";
import { ProductsContext } from "../../../provider/productsContext";
import StyledContainerCategories from "./style";

const FilterForCategory = () => {
  const { listFilters, setCategoryId, setShowCategory } =
    useContext(ProductsContext);

  const filterCategories =
    listFilters &&
    listFilters[0] &&
    listFilters[0].filter((filter) => filter.id === "category");

  if (filterCategories && filterCategories[0]?.values.length < 0) {
    setShowCategory(false);
  }

  return (
    <StyledContainerCategories>
      <div>
        <ul>
          {filterCategories &&
            filterCategories[0]?.values.map((category) => {
              return (
                <li key={category.id}>
                  <button onClick={() => setCategoryId(category.id)}>
                    {category.name}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </StyledContainerCategories>
  );
};

export default FilterForCategory;
