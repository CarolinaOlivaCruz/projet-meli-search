import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 150px;
  box-shadow: 0px 1px 4px 0 var(--color-grey-70);
  background-color: var(--color-grey-30);

  section {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: var(--font-size-36);
    }

    img {
      width: 350px;
      height: 70%;
      max-width: 500px;
      object-fit: cover;
    }

    div {
      width: 100%;
      border-radius: var(--radius-3);
      display: flex;
      padding: 5px 10px;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0px 1px 4px 0 var(--color-grey-70);

      input {
        width: 85%;
        height: 90%;
      }

      button {
        padding-left: 10px;
        border-left: 1px solid var(--color-grey-100);
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
          object-fit: cover;
        }
      }

      :focus-within {
        border: 1px solid var(--color-blue-80);
        box-shadow: 0px 1px 4px 0 var(--color-blue-70);
      }
    }
  }

  @media (min-width: 750px) {
    height: 80px;

    section {
      width: 80%;
      flex-direction: row;
      justify-content: space-between;

      img {
        margin-left: -30px;
      }

      div {
        width: 50%;

        img {
          margin: 0;
        }
      }
    }
  }
`;
