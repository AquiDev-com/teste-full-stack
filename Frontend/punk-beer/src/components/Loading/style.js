import styled from "styled-components";

export const StyledLoading = styled.div`
  .carregando {
    background-color: transparent;
    animation: giro 2s linear infinite;
    height: 1.313rem;
    width: 0.875rem;
    color: #ffffff;
    object-fit: cover;
  }

  @keyframes giro {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
