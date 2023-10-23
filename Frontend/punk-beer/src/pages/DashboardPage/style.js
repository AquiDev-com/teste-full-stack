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
    max-width: 87.5rem;
    width: 100%;
    padding: 0 2.625rem;
    height: 6.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
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
    height: 9.375rem;
    width: 9.375rem;
    border-radius: 50%;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #e03d23;
    background-color: #e03d23;
    color: #f8f9fa;
  }

  .mainBeer {
    background-color: #f0f0f0;
    padding: 1.25rem;
    max-width: 87.5rem;
    width: 100%;
  }

  .areaBeer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cardBeer {
    background-color: #fff;
    border: 0.063rem solid #e3d43d;
    border-radius: 0.5rem;
    margin: 0.625rem;
    padding: 1.25rem;
    text-align: center;
    width: 15.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    animation: cards 1.5s ease-in-out;
  }

  .cardBeer:hover {
    border: 0.094rem solid #e03d23;
  }

  .nameBeer {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }

  .sinceBeer {
    font-family: "Roboto", sans-serif;
    font-size: 0.813rem;
    color: #888;
    margin-bottom: 0.313rem;
  }

  .taglineBeer {
    font-family: "Roboto", sans-serif;
    font-size: 0.813rem;
    margin-bottom: 0.313rem;
  }

  .alcoholBeer {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: #888;
    margin-bottom: 0.625rem;
  }

  .ibuBeer {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    color: #2e2e2e;
    margin-bottom: 0.625rem;
  }

  .imageBeer {
    max-width: 100%;
    height: 15.625rem;
    border-radius: 0.25rem;
  }

  .pagination {
    padding: 0.625rem 0rem 0.625rem 0rem;
    display: flex;
    gap: 0.938rem;
  }

  .btPagination {
    margin-bottom: 0.625rem;
    width: 5rem;
    padding: 0.313rem;
    border-radius: 0.313rem;
    background: #000000;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    font-size: 0.875rem;
  }

  .btPagination:hover {
    background: #e03d23;
  }

  .btPagination.disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  .btViewMore {
    margin-top: 1.25rem;
    margin-bottom: 0.625rem;
    padding: 0.5rem;
    border-radius: 1rem;
    align-self: flex-end;
    background: #000000;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    font-size: 0.875rem;
  }

  .btViewMore:hover {
    background: #e3d43d;
    color: #000000;
    font-weight: bold;
  }

  .areaBtFilter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .btFilterDash {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: #000000;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    font-size: 0.875rem;
  }

  .btFilterDash:hover {
    background: #e3d43d;
    color: #000000;
    font-weight: bold;
  }

  @media (max-width: 43.75rem) {
    .headerDashboard {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem 0.938rem;
    }
    .logo {
      height: 7.375rem;
      width: 4.375rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .btComeBackLogin {
      max-width: 3.21812rem;
      width: 100%;
      font-size: 0.75rem;
    }

    .areaBeer {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
    }

    .cardBeer {
      flex: 0 0 auto;
      width: 15.625rem;
      margin: 0.625rem;
    }
  }

  @keyframes cards {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
