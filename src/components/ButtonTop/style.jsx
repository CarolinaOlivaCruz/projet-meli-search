import styled from "styled-components";

const StyledContainerButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;

  img {
    width: 50px;
  }

  @media (min-width: 700px) {
    bottom: 35px;
    right: 90px;
  }
`;

export default StyledContainerButton;
