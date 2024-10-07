import styled from "styled-components";

interface CategoriasContainerProps {
    styles: boolean
    closeMenuWidth?: boolean
}

export const CategoriasContainer = styled.div<CategoriasContainerProps>`
    width: ${({styles, closeMenuWidth})=> (closeMenuWidth? '99vw': styles? "calc(99vw - 250px)": "calc(99vw - 100px)")};
    padding: 0px 8px;
    border: 6px solid white;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    position: fixed;
    z-index: 3;
    background-color: white;

`
export const ButtonShadow = styled.div`
    visibility: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, white 50%, transparent 70%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: -10px;
    top: -50%;
    transform: rotate(180deg);
    z-index: 3;
    
`
export const ButtonShadowRight = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, white 50%, transparent 70%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: -10px;
    top: -50%;
    z-index: 3;
`
export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #d3d3d3;
    }
    
`
export const ButtonImage = styled.img`
    width: 20px;
    border-radius: 50%;
    &:hover{
        background-color: #d9d9d9;
    }
`

export const CategoriasStyled = styled.div<{styles?: boolean}>`
    width: auto;
    height: 40px;
    padding: 4px 18px;
    column-gap: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* Esconde a barra de rolagem no Internet Explorer */
    scrollbar-width: none; /* Esconde a barra de rolagem no Firefox */
    &::-webkit-scrollbar{
        display: none;
    }
`

export const Categoria = styled.div`
    width: auto;
    white-space: nowrap;
    height: 32px;
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight:500;
    font-size: 15px;
    cursor: pointer;

    &.on{
        background-color: black;
        color: white;
    }

`