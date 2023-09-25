import styled from "styled-components";

export const DashboardMain = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--orange);
  div {
    max-width: 95%;
    min-width: 95%;
    display: flex;
    justify-content: center;
  }
  ul {
    margin-top: 2rem;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: flex-start;
  }
`;
