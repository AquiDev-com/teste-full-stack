import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerDashboard {
    margin-top: 1.8125rem;
    margin-bottom: 1.773125rem;
    max-width: 90rem;
    width: 90%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    padding-right: 1.313rem;
    border-radius: 0.25rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #e3d43d;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000;
  }

  .logo {
    height: 150px;
    width: 150px;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #e03d23;
    background-color: #e03d23;
    color: #f8f9fa;
  }

  @media (max-width: 43.75rem) {
    .headerHome {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      max-width: 90rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      max-width: 10.5956rem;
      width: 100%;
      height: 2.91438rem;
    }

    .btComeBackLogin {
      max-width: 3.21812rem;
      width: 100%;
      height: 1.50687rem;
      font-size: 0.75rem;
    }
  }
`;
