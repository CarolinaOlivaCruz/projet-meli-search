import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/imgs/logo2.png";
import iconSearch from "../../assets/imgs/search.png";
import { StyledHeader } from "./style";
import { ProductsContext } from "../../provider/productsContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { listProducts, setFilteredProducts, filteredProducts } =
    useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredProducts(listProducts);
  }, [listProducts, setFilteredProducts]);

  const handleFilter = () => {
    setIsSearching(true);

    const filteredProducts = listProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts.length > 0 ? filteredProducts : null);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(false);
  };

  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="logo" />
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar produtos..."
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleFilter();
            }}
          >
            <img src={iconSearch} alt="search" />
          </button>
        </form>
        <button type="button" onClick={() => navigate("/cart")}>cart</button>
      </section>
      {isSearching && filteredProducts === null && (
        <p>Nenhum produto encontrado</p>
      )}
    </StyledHeader>
  );
};

export default Header;
