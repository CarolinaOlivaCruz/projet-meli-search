import React from "react";
import logo from "../../assets/imgs/logo2.png";
import iconSearch from "../../assets/imgs/search.png";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="" />
        <form>
          <input type="text" placeholder="Buscar productos..." />
          <button>
            <img src={iconSearch} alt="" />
          </button>
        </form>
      </section>
    </StyledHeader>
  );
};

export default Header;
