import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 150px;
  box-shadow: 0px 1px 4px 0 var(--color-grey-70);
  background-color: var(--color-grey-30);

  p {
    width: 50%;
    padding: 20px;
    margin: 80px auto;
    background-color: var(--color-grey-50);
    box-shadow: 0px 1px 4px 0 var(--color-grey-60);
    border-radius: var(--radius-1);

    @media (min-width: 750px) {
      margin: 150px auto;
      font-size: var(--font-size-18);
    }
  }

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
      display: grid;
      grid-template-columns: 5fr 1fr;

      button {
        padding-right: 10px;
        border-left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
          width: 30px;
          height: 90%;
        }
      }

      form {
        width: 100%;
        border-radius: var(--radius-3);
        display: flex;
        padding: 7px 10px;
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
  }

  @media (min-width: 750px) {
    height: 80px;
    grid-template-columns: 6fr 1fr;

    section {
      width: 80%;
      flex-direction: row;
      justify-content: space-between;

      img {
        margin-left: -30px;
      }

      div {
        button {
          padding-left: 0;
          border-left: 0;
          display: flex;
          align-items: center;

          img {
            width: 30px;
            height: 90%;
            margin: 0;
          }

          form {
            img {
              margin: 0;
            }
          }
        }
      }
    }
  }
`;
