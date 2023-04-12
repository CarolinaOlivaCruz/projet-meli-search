import React from "react";
import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyle";


const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
};

export default App;
