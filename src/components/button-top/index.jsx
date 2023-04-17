import React from "react";
import StyledContainerButton from "./style";


const ButtonTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledContainerButton>
      <button type="button" onClick={handleScrollToTop}>
        {/* <img src="|" alt="" /> */}
        Subir
      </button>
    </StyledContainerButton>
  );
};

export default ButtonTop;
