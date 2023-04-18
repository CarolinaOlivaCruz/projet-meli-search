import styled from "styled-components";

const StyledListCart = styled.ul`
  overflow: auto;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  height: 90%;

  li {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 2fr;
    align-items: center;
    justify-items: center;
    border-bottom: 1px solid var(--color-grey-60);
    padding: 20px 10px;

    div {
      margin: 0 auto;
      display: flex;
      gap: 10px;
      align-items: center;

      button {
        border-radius: var(--radius-1);
        padding: 0;
        border: 1px solid var(--color-grey-60);
        background-color: var(--color-grey-50);
      }

      p {
        width: 60px;
      }
    }

    section {
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      gap: 10px;

      h3 {
        font-size: var(--font-size-14);
      }

      p {
        font-size: var(--font-size-18);
      }

      div {
        width: 100%;
        gap: 5px;

        p {
          text-align: left;
        }

        button {
          padding: 0 5px;
        }
      }
    }

    img {
      width: 100px;
      padding: 5px 0;
      box-shadow: 0.1px 0.1px 3px 0.1px var(--color-grey-60);
    }
  }

  @media (min-width: 750px) {
    overflow: auto;
    height: 100%;
    padding: 5px 0;

    li {
      width: 90%;
      max-height: 150px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
      justify-items: center;
      border-bottom: 1px solid var(--color-grey-60);
      padding: 20px 10px;

      section {
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        margin-left: -10px;

        p {
          font-size: var(--font-size-18);
        }
      }

      img {
        margin-left: -40px;
        width: 100px;
        height: 90%;
        padding: 5px 0;
        box-shadow: 0.1px 0.1px 3px 0.1px var(--color-grey-60);
      }

      div {
        display: flex;
        gap: 10px;

        button {
          border-radius: var(--radius-1);
          padding: 0 5px;
          border: 1px solid var(--color-grey-60);
          background-color: var(--color-grey-50);
        }
      }
    }
  }
`;

export default StyledListCart;
