import styled from "styled-components";

const StyledContainer = styled.main`
  width: 90%;
  margin: 30px auto;

  @media (min-width: 750px) {
    width: 80%;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }
`;

export default StyledContainer;
