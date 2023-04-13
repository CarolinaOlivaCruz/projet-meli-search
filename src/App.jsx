import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./provider/productsContext";
import RoutesApp from "./routes";
import { GlobalStyles } from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ProductProvider>
          <RoutesApp />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
