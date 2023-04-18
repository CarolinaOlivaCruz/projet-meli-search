import React from "react";
import StyledContainerButton from "./style";
import buttonTop from "../../assets/imgs/arow.png"

const ButtonTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledContainerButton>
      <button type="button" onClick={handleScrollToTop}>
        <img src={buttonTop} alt="" />
      </button>
    </StyledContainerButton>
  );
};

export default ButtonTop;
