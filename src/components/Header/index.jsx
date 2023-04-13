import React from "react";
import logo from "../../assets/imgs/logo2.png";
import iconSearch from "../../assets/imgs/search.png";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="" />
        <div>
          <input type="text" placeholder="Buscar productos..." />
          <button>
            <img src={iconSearch} alt="" />
          </button>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
