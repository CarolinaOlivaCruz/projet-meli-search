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
        <section className="sin-products">
          <p>¡Construye un carrito de compras!</p>
          <Link to="/">
            <span className="buscar">Buscar productos</span>
          </Link>
        </section>
      ) : (
        <section>
          <header>
            <button>
              <Link to="/">X</Link>
            </button>
          </header>
          <main>
            <ListCart />
            <aside>
              <div>
                <span>Total productos: {cart.cartTotalQuantity}</span>
                <span>Total price: ${cart.cartTotalAmount}</span>
              </div>
              <button onClick={() => handleClearCart()}>Vaciar carrito</button>
              <Link to="/">
                <p>Buscar productos</p>
              </Link>
            </aside>
          </main>
        </section>
      )}
    </StyledCarrito>
  );
};

export default Cart;
