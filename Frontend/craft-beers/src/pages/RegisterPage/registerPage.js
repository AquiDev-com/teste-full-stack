import styled from "styled-components";

export const Register = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .divLeft {
        width: 30%;
        gap: 27px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        color: #F69803;
        margin-top: 20px;
    }

    .divRegister {
        display: flex;
        align-items: center;
        width: 85%;
        justify-content: space-between;
        margin-top: 20px;
    }

    form {
        width: 85%;
        gap: 7px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    label {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #F69803;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #B4A07E;
        border-radius: 8px;
        background-color: #E8D9C0;
    }

    button {
        width: 100%;
        height: 40px;
        background-color: #A85C00;
        border-radius: 8px;
        color: #FCF0CC;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
    }

   button:hover {
    border: 1.22px solid #F69803 ;
    background-color:#F69803 ;
  }

    span {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #F69803;
    }

    .spanText {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #045071;
    }

   a {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        color: #F69803;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        font-size: 14px;
        margin-top: 22px;
    }

    .divRight {
        width: 30%;
        max-width: 369px;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-color: #FCF0CC;
        border: 2px solid #F69803;
        height: auto;
        margin-top: 50px;
    }

    .divCard {
        width: 80%;
        height: 90px;
        border: 1px solid #E0E0E0;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }


    @media (max-width: 900px) {
            flex-direction: column;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0px;
            height: auto;
            }
       
            .divRight {
                width: 100%;
                align-items: center;
            }

            .divLeft {
                display: flex;
                align-items: center;
                height: auto;
                margin-top: 10px;
            }
         
`