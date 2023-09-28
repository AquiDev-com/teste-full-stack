import styled from "styled-components";

export const StyledHeaderLogged = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerLogged {
    margin-top: 0.938rem;
    margin-bottom: 1.773125rem;
    padding: 0 2.625rem 0 4.625rem;
    width: 100%;
    height: 6.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e3d43d;
    border-radius: 0.25rem;
  }

  .userImage {
    height: 4.375rem;
    width: 4.375rem;
    border-radius: 50%;
    border: 0.25rem solid #e03d23;
  }

  .areaUser {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .hello,
  .userName {
    font-family: "Roboto", sans-serif;
    color: #000;
    font-size: 0.875rem;
    font-weight: bold;
  }

  @media (max-width: 43.75rem) {
    .headerLogged {
      margin-top: 0.938rem;
      margin-bottom: 1.773125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem 0.938rem;
    }
    .logo {
      max-width: 10.5956rem;
      width: 100%;
    }
  }
`;
