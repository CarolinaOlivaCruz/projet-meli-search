import styled from "styled-components";

const StyledContainerButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;

  img {
    width: 80px;
  }

  @media (min-width: 700px) {
    bottom: 35px;
    right: 70px;
  }
`;

export default StyledContainerButton;
