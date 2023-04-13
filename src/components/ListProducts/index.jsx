import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../provider/productsContext";
import StyledList from "./style";

const ListProducts = () => {
  const { listProducts, getItem } = useContext(ProductsContext);
  
  return (
    <StyledList>
      {listProducts?.map((item) => {
        const { id, thumbnail, title, price } = item;

        return (
          <li key={id}>
            <img src={thumbnail} alt="" />
            <div>
              <button type="button" onClick={() => getItem(id)}>
                {title}
              </button>
              <span>$ {price}</span>
            </div>
          </li>
        );
      })}
    </StyledList>
  );
};

export default ListProducts;
