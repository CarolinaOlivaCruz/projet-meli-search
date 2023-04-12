import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesApp;
