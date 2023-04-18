import styled from "styled-components";

const StyledContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;

  @media (min-width: 750px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  } ;
`;
export default StyledContainer;
