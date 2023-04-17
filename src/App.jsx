import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./provider/productsContext";
import RoutesApp from "./routes";
import { GlobalStyles } from "./styles/globalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer, { getTotals } from "./provider/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotals());

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
        <ProductProvider>
          <Provider store={store}>
            <RoutesApp />
          </Provider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
