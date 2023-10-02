import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  
.container {
    overflow: auto;
}

.container::-webkit-scrollbar {
        width: 10px; 
}

.container::-webkit-scrollbar-thumb {
        background-color: #B4A07E;; 
}

.container::-webkit-scrollbar-thumb:hover {
        background-color: #665349;
}


  .divHeader {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }

  .imgLogo {
    width: 16%;
    max-width: 16%;
  }

  .buttonSair {
    height: 28px;
    width: 43px;
    background: #B4A07E;
    border: 2px solid #B4A07E;
    border-radius: 8px;
    color: #FCF0CC;
    margin-top: 10px;
  }

  .buttonSair:hover {
    background-color: #665349;
    border: 2px solid #665349;
  }

  .divButton {
    display: flex;
  }

  .ulCard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 0 0 41px;
    margin-bottom: 20px;
    width: 93%;
    justify-content: center;
  }

  input {
    height: 30px;
    border: 2px solid #F69803;
    border-radius: 5px;
    padding: 0px 10px 0px 15px;
  }

   input:hover {
    border: 2px solid #665349;
  }

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    .divButton {
    display: flex;
  }
    .imgLogo {
    width: 50%;
    max-width: 50%;
  }
   .ulCard {
    margin: 0px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 10px;
    overflow: auto;
    margin-top: 20px;
    }

  }
`;
