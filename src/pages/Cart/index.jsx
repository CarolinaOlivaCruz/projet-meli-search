import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../provider/cartSlice";

const Cart = () => {
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Adicione itens...</p>
          <div>
            <Link to="/">
              <span>Start Shop</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <div>
            {cart.cartItems?.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <img src={item.thumbnail} alt="" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                      <button onClick={() => handleRemoveFromCart(item)}>
                        Remover
                      </button>
                    </div>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <button>{item.cartQuantity}</button>
                    <button onClick={() => handleAdd(item)}>+</button>
                  </div>
                  <div>{item.price * item.cartQuantity}</div>
                  <div></div>
                </div>
              );
            })}
            <div>
              <span>Subtotal</span>
              <span>$ {cart.cartTotalAmount}</span>
            </div>
            <button onClick={() => handleClearCart()}>Clear cart</button>
            <Link to="/">
              <span>Continue comprando</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
