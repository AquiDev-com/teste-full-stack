import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: #000000;
  padding: 0rem 0.625rem 0rem 0.625rem;

  .secApresentation {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.625rem 1.5rem;
    background-color: #000000;
  }

  .areaImageAndMessage {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    max-width: 23.5625rem;
    width: 100%;
    height: 5.9375rem;
    display: flex;
    padding: 1.0625rem 0rem 1.125rem 0.875rem;
    gap: 1.1875rem;
    background-color: #ffffff;
    border: 0.0625rem solid #e0e0e0;
    border-radius: 0.3125rem;
  }

  .secRegister {
    margin-bottom: 0.625rem;
    max-width: 31.25rem;
    width: 100%;
    height: 45.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid #e03d23;
    padding: 1.75rem 1.5rem;
    background-color: #e3d43d;
  }

  .areaRegisterAndGoToLogin {
    margin-top: 1.75rem;
    margin-bottom: 0.875rem;
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleRegister {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }

  .btGoToLogin {
    max-width: 5.75rem;
    width: 100%;
    height: 1.375rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.7);
    border-bottom: 0.1125rem solid rgba(0, 0, 0, 0.7);
  }
  .btGoToLogin:hover {
    font-weight: 500;
    color: #333333;
    -webkit-tranform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .formRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .lbRegister {
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #000000;
  }

  .iptRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 2.969rem;
    margin-bottom: 0.9375rem;
    padding: 0.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background-color: #d9e8fc;
    color: #000000;
    outline: none;
    border: 0.1125rem solid #8698d9;
    border-radius: 0.5rem;
  }

  .iiptRegister::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .iptRegister:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }
  .iptRegister:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.5rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #e03d23;
    border-radius: 0.5rem;
    padding: 0rem 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .btRegister:hover {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      344deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(224, 61, 35, 1) 100%
    );
  }

  .areaError {
    color: #e60000;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 67.5rem) {
    flex-direction: column;
    gap: 0;
    height: auto;

    .secApresentation {
      height: auto;
    }

    .secRegister {
      border: none;
      width: 98%;
    }
  }
`;
