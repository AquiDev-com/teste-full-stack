import React from "react";
import { useNavigate } from "react-router-dom";
import sadEmotion from "../../assets/fundo.jpg";
import { StyledNotFound } from "./style";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
  };
  return (
    <StyledNotFound>
      <button onClick={goLoginClick} className="btComeBack">
        Voltar
      </button>
      <img
        src={sadEmotion}
        alt="imagem de página não encontrada"
        className="imgError"
      />
    </StyledNotFound>
  );
};
