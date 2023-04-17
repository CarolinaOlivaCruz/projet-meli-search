import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import HomePage from "./pages/home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default RoutesApp;
