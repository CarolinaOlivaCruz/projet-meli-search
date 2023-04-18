import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ListCart from "../../components/ListCart";
import { clearCart, getTotals } from "../../provider/cartSlice";
import StyledCarrito from "./style";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <StyledCarrito>
      {cart.cartItems.length === 0 ? (
        <section>
          <p>¡Construye un carrito de compras!</p>
          <Link to="/">
            <span className="buscar">Buscar productos</span>
          </Link>
        </section>
      ) : (
        <section>
          <main>
            <ListCart />
            <aside>
              <div>
                <span>Total produtos: {cart.cartTotalQuantity}</span>
                <span>Total ${cart.cartTotalAmount}</span>
              </div>
              <button onClick={() => handleClearCart()}>Clear cart</button>
              <Link to="/">
                <p>Ver produtos</p>
              </Link>
            </aside>
          </main>
        </section>
      )}
    </StyledCarrito>
  );
};

export default Cart;
