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
      background-color: var(--color-blue-80);
      display: flex;
      justify-content: flex-end;
      padding: 10px 30px;
      box-shadow: 0px 2px 4px 0 var(--color-grey-70);
      margin-top: 0;

      button {
        color: var(--color-grey-30);
        font-size: 25px;
      }
    }

    main {
      width: 90%;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          font-weight: bold;
        }

        @media (min-width: 750px) {
          padding: 0 10px;
        }
      }

      section {
        width: 100%;
        max-width: 350px;
        max-height: 360px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--color-grey-60);
        border-radius: var(--radius-1);
        padding: 0 10px;

        div {
          overflow: hidden;
          border-radius: 0;
          margin: 5px auto;
        }
      }

      @media (min-width: 750px) {
        flex-direction: row;
      }
    }
  }
`;

export default StyledContainerModal;
