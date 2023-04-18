import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../provider/cartSlice";
import StyledListCart from "./style";

const ListCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  return (
    <StyledListCart>
      {cart.cartItems?.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.thumbnail} alt="" />
            <section>
              <h3>{item.title}</h3>
              <div>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Borrar
                </button>
              </div>
            </section>
            <div>
              <button onClick={() => handleDecrease(item)}>-</button>
              <button>{item.cartQuantity}</button>
              <button onClick={() => handleAdd(item)}>+</button>
              <p> ${item.price * item.cartQuantity}</p>
            </div>
          </li>
        );
      })}
    </StyledListCart>
  );
};

export default ListCart;
