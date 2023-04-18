import styled from "styled-components";

const StyledCarrito = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: var(--color-grey-40);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .buscar {
    padding: 8px 15px;
    color: var(--color-grey-30);
    background-color: var(--color-blue-80);
    border-radius: var(--radius-1);
    border: 1px solid var(--color-grey-60);
  }

  .sin-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    width: 90%;
    height: 95%;
    background-color: var(--color-grey-30);
    border-radius: var(--radius-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: auto;
    justify-content: flex-start;

    p {
      width: 95%;
      text-align: center;
    }

    header {
      width: 100%;
      box-shadow: 0px 1px 4px 0 var(--color-grey-70);
      background-color: var(--color-grey-30);
      display: flex;
      justify-content: flex-end;
      padding: 10px 30px;

      button {
        padding: 5px 15px;
        border-radius: var(--radius-4);
        background-color: var(--color-blue-80);
        font-size: var(--font-size-18);
        
        a {
          color: var(--color-grey-30);
        }

        @media (min-width: 750px) {
          font-size: var(--font-size-25);
        }
      }
    }

    main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr;
      grid-gap: 10px;
    }

    aside {
      width: 90%;
      min-height: 150px;
      max-height: 50%;
      margin: 0 auto;
      margin-top: -40px;
      display: flex;
      flex-direction: column;
      border: 1px solid var(--color-grey-60);
      padding: 0 10px;
      justify-content: center;
      gap: 10px;
      padding: 20px 10px; 

      div {
        display: flex;
        flex-direction: column;
      }

      span {
        font-weight: bold;
      }

      button {
        padding: 8px 15px;
        color: var(--color-grey-100);
        background-color: var(--color-grey-50);
        border-radius: var(--radius-1);
        border: 1px solid var(--color-grey-60);
      }

      p {
        width: 100%;
        text-align: center;
        font-size: var(--font-size-14);
        padding: 10px 15px;
        color: var(--color-grey-30);
        background-color: var(--color-blue-70);
        border-radius: var(--radius-1);
      }
    }

    @media (min-width: 750px) {
      width: 90%;
      min-height: 50%;
      max-height: 95%;

      main {
        max-height: 90%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto 1fr;
        grid-gap: 10px;
      }

      aside {
        width: 90%;
        margin: 50px 0;
        max-height: 40%;

        span {
          font-size: var(--font-size-14);
          font-weight: bold;
        }

        button {
          padding: 10px 15px;
          color: var(--color-grey-100);
          background-color: var(--color-grey-50);
          border-radius: var(--radius-1);
          border: 1px solid var(--color-grey-60);
        }

        p {
          padding: 10px 15px;
        }
      }

      p {
        font-size: var(--font-size-25);
      }
    }
  }

  @media (min-width: 750px) {
    aside {
      max-height: 40%;

      span {
        font-size: var(--font-size-18);
      }
    }
  }
`;

export default StyledCarrito;

// width: 100vw;
// height: 100vh;
// position: fixed;
// background-color: var(--color-grey-40);
// display: flex;
// justify-content: center;
// align-items: center;

// section {
//   width: 90%;
//   min-height: 50%;
//   max-height: 95%;
//   background-color: var(--color-grey-30);
//   border-radius: var(--radius-1);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;

//   p {
//     width: 95%;
//     text-align: center;
//   }

//   a {
//     padding: 0 10px;
//     color: var(--color-grey-30);
//     background-color: var(--color-blue-70);
//     border-radius: var(--radius-1);
//   }

//   main {
//     display: grid;
//     grid-template-columns: 3fr 1fr;
//     grid-gap: 10px;
//   }

//   aside {
//     width: 90%;
//     min-height: 160px;
//     height: 50%;
//     margin: 50px 0;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid var(--color-grey-60);
//     padding: 20px 10px;
//     justify-content: center;
//     gap: 10px;

//     span {
//       font-weight: bold;
//     }

//     button {
//       padding: 8px 15px;
//       color: var(--color-grey-100);
//       background-color: var(--color-grey-50);
//       border-radius: var(--radius-1);
//       border: 1px solid var(--color-grey-60);
//     }
//   }

//   @media (min-width: 750px) {
//     p {
//       font-size: var(--font-size-25);
//     }

//     a {
//       padding: 15px 30px;
//     }
//   }
// }
