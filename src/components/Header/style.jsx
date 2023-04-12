import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;

  section {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 100%;
      max-width: 500px;
    }

    input {
      border: 1px solid var(--color-grey-100);
    }
  }
`;
