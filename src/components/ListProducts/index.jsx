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
            <button type="button" onClick={() => getItem(id)}>
              <section>
                <img src={thumbnail} alt="" />
                <div>
                  <p>{title}</p>
                  <span>$ {price},00</span>
                </div>
              </section>
            </button>
          </li>
        );
      })}
    </StyledList>
  );
};

export default ListProducts;
