import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/imgs/logo2.png";
import iconSearch from "../../assets/imgs/search.png";
import { StyledHeader } from "./style";
import { ProductsContext } from "../../provider/productsContext";
import cartImg from "../../assets/imgs/cart.png";

const Header = () => {
  const { listProducts, setFilteredProducts, filteredProducts } =
    useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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
        <div>
          <form>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Buscar productos..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleFilter();
              }}
            >
              <img src={iconSearch} alt="Search" />
            </button>
          </form>
          <button>
            <img src={cartImg} alt="Carrito" />
          </button>
        </div>
      </section>
      {isSearching && filteredProducts === null && (
        <p>¡Ningún producto encontrado!</p>
      )}
    </StyledHeader>
  );
};

export default Header;
