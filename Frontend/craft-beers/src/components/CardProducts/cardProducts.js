import styled from "styled-components";

export const CardProduct = styled.li`
  height: 400px;
  width: 20%;
  border-radius: 5px;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #FF9300;
  border-radius: 5px;
  min-width: 200px;
  background-color: #F5F5F5;

  &:hover {
    border: 2px solid #A85C00;
  }

  .imgProduct {
    width: 100%;
    height: 60%;
    background: #f5f5f5;
    object-fit: contain;
    margin-top: 8px;
  }

  .divLi {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: baseline;
    margin-top: 10px;
    width: 90%;
    margin-top: 15px;
  }

  h2 {
    font-size: 15px;
    font-weight: 700;
    color:  #A85C00;
    width: 200px;
    max-width: 180px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: #665349;
  }
`;
