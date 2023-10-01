import styled from "styled-components";

export const StyledBeerModal = styled.div`
  height: 100%;
  width: 100%;
  padding: 4.375rem 0rem 1rem 0rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  left: 0%;

  .modalBeer {
    max-width: 39.0625rem;
    width: 100%;
    max-height: 37.5rem;
    overflow: auto;
    border-radius: 0.25rem;
    background: #fdff83;
    animation: beer_modal 1.5s ease-in;
    transform: 1.5s ease-in;
    border: 0.156rem solid #000000;
  }
  .headerModal {
    max-width: 39.0625rem;
    background: #000000;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleModal {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #f8f9fa;
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .areaInformation {
    max-height: 30rem;
    overflow: auto;
    padding: 0.75rem 1.25rem;
    display: flex;
    flex-direction: column;
    background: #fdff83;
    overflow-y: auto;
  }

  .areaInformation::-webkit-scrollbar {
    width: 0.5rem;
  }

  .areaInformation::-webkit-scrollbar-thumb {
    background-color: #e03d23;
  }

  .areaInformation::-webkit-scrollbar-thumb:hover {
    background-color: #e03d23;
  }

  .beerTitle {
    margin-top: 1rem;
    margin-bottom: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    color: #2e2e2e;
    text-align: center;
    border-bottom: 0.125rem solid #e03d23;
  }

  .beerInformations {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    color: #2e2e2e;
    font-weight: 500;
    line-height: 1.625rem;
  }

  @media (max-width: 43.75rem) {
    .modalBeer {
      width: 91%;
    }
  }

  @keyframes beer_modal {
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
