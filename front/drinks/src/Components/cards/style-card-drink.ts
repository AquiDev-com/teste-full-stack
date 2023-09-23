import styled from "styled-components";

export const CardDrinkStyle = styled.li`
  max-width: 13rem;
  min-width: 13rem;
  height: 20rem;
  margin: 0;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4.5px;
  font-family: var(--font_family);
  font-weight: var(--font-weight-title);

  p {
    width: 95%;
    text-align: center;
  }
  img {
    height: 12rem;
  }
`;
