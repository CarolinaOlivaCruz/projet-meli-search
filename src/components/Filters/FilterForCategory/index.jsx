import React, { useContext } from "react";
import { ProductsContext } from "../../../provider/productsContext";

const FilterForCategory = () => {
  const { listFilters, setCategoryId } = useContext(ProductsContext);

  const filterCategories =
    listFilters &&
    listFilters[0] &&
    listFilters[0].filter((filter) => filter.id === "category");

  return (
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
  );
};

export default FilterForCategory;
