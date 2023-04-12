import React from "react";
import logo from "../../assets/imgs/logo1.png";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="" />
        <form>
          <input type="text" placeholder="Buscar..." />
        </form>
      </section>
    </StyledHeader>
  );
};

export default Header;
