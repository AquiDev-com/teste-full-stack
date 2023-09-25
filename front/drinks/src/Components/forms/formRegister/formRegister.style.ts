import styled from "styled-components";

export const FormRegisterStyle = styled.form`
  background-color: var(--grey-1);
  width: 90%;
  max-width: 22rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 4.5px;
  color: var(--black);
  h2 {
    font-family: var(--font_family);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-title);
    align-self: center;
  }

  label {
    align-self: center;
    width: 90%;
    font-family: var(--font_family);
    font-weight: var(--font-weight-title);
    font-size: var(--font-size-text);
  }
  input {
    width: 90%;
    align-self: center;
    height: 2rem;
    border: none;
    border-radius: 4px;
    font-family: var(--font_family);
    font-weight: var(--font-weight-text);
    color: var(--grey-1);
  }
  a {
    align-self: center;
    font-family: var(--font_family);
    font-size: var(--font-size-text);
  }

  button {
    width: 80%;
    align-self: center;
    height: 2rem;
    border: none;
    border-radius: 4px;
    background-color: var(--blue-2);
    font-family: var(--font_family);
    font-weight: var(--font-weight-title);
    color: var(--white);
  }
`;
