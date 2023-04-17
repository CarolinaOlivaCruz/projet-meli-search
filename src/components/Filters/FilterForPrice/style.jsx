import styled from "styled-components";

const StyledContainerButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  button {
    border-radius: var(--radius-1);
    padding: 0 10px;
    background-color: var(--color-grey-60);

    &:focus {
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-60);
    }

    @media (min-width: 750px) {
      padding: 10px;
    }
  }
`;
export default StyledContainerButtons;
