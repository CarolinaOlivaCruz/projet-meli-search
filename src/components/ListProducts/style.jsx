import styled from "styled-components";

const StyledList = styled.ul`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    padding: 15px 0;
    gap: 10px;
    border-bottom: 1px solid var(--color-grey-60);
    align-items: center;
    background-color: var(--color-grey-30);
    border-radius: var(--radius-1);

    button {
      font-size: var(--font-size-14);
      text-align: left;
    }

    span {
      font-weight: bold;
      font-size: var(--font-size-16);
    }

    :hover {
      transform: scale(1.1);
      box-shadow: 0.1px 0.1px 3px 0.1px var(--color-blue-70);

      button {
        font-size: var(--font-size-16);
      }
    }
  }

  @media (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 30%;
      max-width: 250px;
      height: 300px;
      max-height: 350px;
      flex-direction: column;
      border: none;
      padding: 10px 0;
      margin-bottom: 20px;
      box-shadow: 3px 3px 6px 6px var(--color-grey-50);

      div {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-top: 1px solid var(--color-grey-60);

        button {
          margin-top: 20px;
          padding: 0 10px;
          padding-bottom: 0;
          font-size: var(--font-size-18);
        }

        span {
          padding: 10px;
          padding-bottom: 0;
          font-weight: bold;
          font-size: var(--font-size-18);
        }
      }
    }
  }
`;

export default StyledList;
