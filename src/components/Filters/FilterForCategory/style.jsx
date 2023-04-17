import styled from "styled-components";

const StyledContainerCategories = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 5px;

  div {
    width: 100%;
    border: 1px solid var(--color-grey-60);
    padding: 10px;
    border-radius: var(--radius-1);

    ul {
      max-height: 150px;
      overflow: auto;
    }
  }
`;
export default StyledContainerCategories;
