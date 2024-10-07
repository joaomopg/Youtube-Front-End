import styled from "styled-components";

export const ContainerAll = styled.div<{styles?: boolean}>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 5;
    position: absolute;
`
export const LoginContainer = styled.div`
    width: 35vw;
    height: 75vh;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    padding: 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 5;
    position: absolute;
`

export const LogoTextContainer = styled.div`
    width: 100%;
    height: 25%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LogoImage = styled.img`
    width: 20%;
    height: 30%;
    margin-bottom: 10px;
`
export const Text = styled.div`
    font-size: 26px;
    margin-bottom: 10px;
`
export const TextSmall = styled.div`
    font-size: 18px;
`

export const InputsContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

`
export const Inputs = styled.input<{text: boolean}>`
    width: 100%;
    height: 50px;
    border: ${({text})=> text? '2px solid red' : '1px solid #d9d9d9'};
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 18px;
    outline: none;

    &:focus{
        border: 2px solid #0494fc;
    }

`
export const InputsPassword = styled.input<{textPassword: boolean}>`
    width: 100%;
    height: 50px;
    border: ${({textPassword})=> textPassword? '2px solid red' : '1px solid #d9d9d9'};
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 18px;
    outline: none;

    &:focus{
        border: 2px solid #0494fc;
    }

`
export const SpanSmall = styled.span`
    font-size: 15px;
    color: red;
`

export const CheckBoxContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2px;
    display: flex;
    flex-direction: row;

`
export const SignUpContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const SignInBtn = styled.button`
    width: 100px;
    height: 35px;
    background-color: #2574f7;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`


