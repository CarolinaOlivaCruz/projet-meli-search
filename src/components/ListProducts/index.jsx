import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import StyledList from "./style";

const ListProducts = () => {
  const { listProducts } = useContext(ProductsContext);

  return (
    <StyledList>
      {listProducts?.map((item) => {
        const { id, thumbnail, title, price } = item;

        return (
          <li key={id}>
            <img src={thumbnail} alt="" />
            <div>
              <p>{title}</p>
              <span>$ {price}</span>
            </div>
          </li>
        );
      })}
    </StyledList>
  );
};

export default ListProducts;
