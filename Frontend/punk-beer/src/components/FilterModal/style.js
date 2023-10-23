import styled from "styled-components";

export const StyledContainerFilterModal = styled.div`
  height: 100%;
  width: 100%;
  padding: 4.375rem 0rem 1rem 0rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  left: 0%;

  .modalContentFilter {
    width: 100%;
    max-height: 31.25rem;
    height: 100%;
    border-radius: 0.25rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: contact 1.5s ease-in;
    transform: 1.5s ease-in;
  }

  .headerModal {
    margin-bottom: 1.5rem;
    max-width: 25rem;
    width: 86%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleModal {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
  }
  .btCloseModal {
    max-width: 0.688rem;
    width: 100%;
    height: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
    background-color: transparent;
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  @media (max-width: 43.75rem) {
    .modalContentContacts {
      width: 91%;
    }
  }

  @keyframes contact {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const StyledFilterModal = styled.div`
  padding: 0rem 1rem 2rem 1rem;

  .formFilter {
    max-width: 25rem;
    width: 95%;
  }
  input {
    border: none;
    background-color: #d9e8fc;
    padding: 0.625rem 0.938rem;
    outline: none;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
  input::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .labelIbu {
    margin-top: 0.938rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: #000000;
  }

  .labelAbv {
    font-family: "Roboto", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: #000000;
  }

  .minMaxFilter {
    width: 6.563rem;
    margin-top: 0.938rem;
    margin-bottom: 1.25rem;
  }

  .areaBtFilter {
    max-width: 17.438rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .areaMinMaxFilter {
    margin-bottom: 2.625rem;
    margin-top: 0.125rem;
    display: flex;
    gap: 1.563rem;
  }

  .btFilter {
    width: 91%;
    margin-bottom: 4.375rem;
    cursor: pointer;
    padding: 0.75rem 1.75rem 0.75rem 1.75rem;
    background: #e03d23;
    border-radius: 0.25rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
  }

  .btFilter:hover {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      344deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(224, 61, 35, 1) 100%
    );
  }
`;
