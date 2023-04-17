import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import StyledList from "./style";

const ListProducts = ({items}) => {
  const { getItem } = useContext(ProductsContext);

  return (
    <StyledList>
      {items?.map((product) => {
        const { id, thumbnail, title, price } = product;

        return (
          <li key={id}>
            <button type="button" onClick={() => getItem(id)}>
              <section>
                <img src={thumbnail} alt="product thumbnail" />
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
