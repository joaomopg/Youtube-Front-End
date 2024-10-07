import styled from "styled-components";

interface ContainerAllProps {
    styles?: boolean
    closeMenu?: boolean
}

export const ContainerAll = styled.div<ContainerAllProps>`
    width: ${({styles, closeMenu})=> (closeMenu? 'calc 99vw' : styles? "calc(99vw - 250px)": "calc(99vw - 100px)")};
    height: auto;
    position: absolute;
    top: 40px;
    padding: 20px;
    box-sizing: border-box;
    left: ${({styles, closeMenu})=> (closeMenu? '0' : styles? "250px": "100px")};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`
export const Text = styled.div`
    width: auto;
    height: auto;
    margin-top: 15px;
    font-size: 40px;
    font-weight: 700;
`
export const ButtonsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
`
export const ButtonCreateVideo = styled.button`
    width: 150px;
    height: 50px;
    margin: 6px 0px;
    border-radius: 8px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2574f8;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
`

export const Container = styled.div`
    height: auto;
    width: auto;
    box-sizing: border-box;
    margin-top: 20px;
    column-gap: 20px;
    row-gap: 30px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: hidden;
    position: relative;
`
export const ModalContainer = styled.div<{styles: boolean}>`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${({styles})=> styles? 'visible': 'hidden'};
    z-index: 5;
    
`
export const Modal = styled.div`
    height: 75%;
    width: 40%;
    background-color: white;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
`
export const CloseBtn = styled.div`
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-weight: 700;
    font-size: 16px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const InputsContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const InputsURL = styled.input<{text: boolean}>`
    width: 97%;
    height: 50px;
    border: ${({text})=> text? '2px solid red' : '1px solid #d9d9d9'};
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 18px;
    margin-bottom: 6px;
    outline: none;

    &:focus{
        border: 2px solid #0494fc;
    }
`
export const InputsTitle = styled.input<{textTitle: boolean}>`
    width: 97%;
    height: 50px;
    border: ${({textTitle})=> textTitle? '2px solid red' : '1px solid #d9d9d9'};
    padding: 4px 12px;
    margin-bottom: 6px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 18px;
    outline: none;

    &:focus{
        border: 2px solid #0494fc;
    }

`
export const InputsDescription = styled.input<{textDescription: boolean}>`
    width: 97%;
    height: 50px;
    border: ${({textDescription})=> textDescription? '2px solid red' : '1px solid #d9d9d9'};
    padding: 4px 12px;
    margin-bottom: 6px;
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
