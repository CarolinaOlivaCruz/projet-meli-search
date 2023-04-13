import styled from "styled-components";

const StyledContainerModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation: show-background 0.8s ease;
  z-index: 3;
  background-color: var(--color-grey-40);
  color: var(--color-grey-100);
  -webkit-animation: show-background 0.8s ease;
  display: flex;
  justify-content: center;

  @-webkit-keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: #23252ba1;
    }
  }

  @keyframes show-background {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: #23252ba1;
    }
  }

  div {
    background-color: var(--color-grey-30);
    border-radius: 8px;
    width: 100%;
    max-width: 1200px;
    margin: 20px;
    animation: slide-up 0.2s ease;
    -webkit-animation: slide-up 0.8s ease;
    overflow: auto;

    @keyframes slide-up {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    header {
      width: 100%;
      box-shadow: 0px 1px 4px 0 var(--color-grey-70);
      background-color: var(--color-grey-30);
      display: flex;
      justify-content: flex-end;
      padding: 10px 30px;
      margin-top: 0;

      button {
        padding: 5px 15px;
        border-radius: var(--radius-4);
        background-color: var(--color-blue-80);
        color: var(--color-grey-30);
        font-size: var(--font-size-18);

        @media (min-width: 750px) {
          font-size: var(--font-size-25);
        }
      }
    }

    main {
      width: 90%;
      margin: 20px auto;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-row-gap: 20px;

      span {
        font-weight: bold;
      }

      div {
        height: 350px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3px;

        button {
          width: 95%;
          margin: 10px auto;
          padding: 8px;
          border-radius: var(--radius-3);
          background-color: var(--color-grey-30);
          color: var(--color-blue-80);
          box-shadow: 0px 1px 4px 0 var(--color-grey-70);
          font-weight: bold;

          @media (min-width: 750px) {
            width: 50%;
            margin-left: 0;
            padding: 8px;
            border-radius: var(--radius-3);
          }

          @media (min-width: 1020px) {
            width: 45%;
          }
        }

        @media (min-width: 750px) {
          justify-content: space-between;
          padding: 0 10px;
          gap: 10px;
        }
      }

      section {
        width: 100%;
        max-width: 350px;
        max-height: 450px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--color-grey-60);
        border-radius: var(--radius-1);
        padding: 0 10px;
        animation: none;

        div {
          overflow: hidden;
          border-radius: 0;
          margin: 5px auto;
          justify-content: none;
          padding: 0;
          gap: 0;

          button {
            width: 8%;
            border-radius: 0;
            box-shadow: none;
          }
        }
      }
      aside {
        padding: 10px;
        border-top: 1px solid var(--color-grey-60);
        border-radius: var(--radius-1);
      }

      @media (min-width: 750px) {
        grid-template-columns: auto 60%;
        grid-template-rows: auto auto;
        grid-column-gap: 10px;
        grid-row-gap: 60px;

        aside {
          grid-column: 1 / span 2;
          h4 {
            margin: 40px 0 10px;
          }
        }
      }
    }
  }
`;

export default StyledContainerModal;

// main {
//   width: 90%;
//   margin: 20px auto;
//   display: grid;
//   grid-template-columns: auto 60%;
//   grid-template-rows: 300px auto;
// grid-row-gap: 60px;
