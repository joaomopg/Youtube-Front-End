import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: white;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 4;
`

interface LogoProps {
    queryMenu?: boolean
}

export const LogoContainer = styled.div<LogoProps>`
    display: flex;
    align-items: center;
`

interface ButtonsContainerProps {
    margin?: string
    display?: boolean
}

export const ButtonContainer = styled.div<ButtonsContainerProps>`  //margin opcional
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({margin}) => margin? margin: 0};
    display: ${({display}) => display? 'none': 'flex'};
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #d3d3d3;
    }
    
`

export const ButtonLogin = styled.div`  //margin opcional
    width: auto;
    height: 40px;
    padding: 6px;
    box-sizing: border-box;
    border: #e6e6e6 1px solid;
    white-space: nowrap;
    border-radius: 40px 40px 40px 40px;
    margin-left: 6px; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #e6f5ff;
        border: 1px solid #e6f5ff;
    }
    
`

interface BtnProps {
    margin?: boolean
    queryMenu?: boolean
}

export const ButtonImage = styled.img<BtnProps>`
    width: 20px;
    margin: ${({margin, queryMenu}) => (queryMenu? "0px 16px 0px 0px" : margin? "0px 16px 0px 0px": 0)};

`



export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`
interface InputContainerProps {
    display?: boolean
}
export const InputContainer = styled.div<InputContainerProps>`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    @media (max-width: 1100px){
        width: 380px;
    }
    @media (max-width: 1000px){
        width: 300px;
    }
    @media (max-width: 900px){
        width: 200px;
    }
    @media (max-width: 800px){
        width: 100px;
    }
    @media (max-width: 700px){
        width: 300px;
        display: ${({display})=> display? 'flex': 'none'};
    }
    @media (max-width: 600px){
        width: 250px;
    }
    @media (max-width: 500px){
        width: 200px;
    }
    @media (max-width: 450px){
        width: 150px;
    }
    @media (max-width: 380px){
        width: 100px;
    }

`

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    border: none;
    outline: none;

`
interface SearchBtnContainerProps {
    styles?: boolean
}
export const SearchButtonContainer = styled.div<SearchBtnContainerProps>`
    width: 70px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 0 40px 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    cursor: pointer;

    &:hover {
        background-color: #f2f2f2;
    }

    @media (max-width: 700px){
        width: ${({styles})=> styles? '70px': '35px'};
        border-radius: ${({styles})=> styles? '0 40px 40px 0': '50%'};
        border: ${({styles})=> styles? '1px solid #d3d3d3': 'none'};
        background-color: ${({styles})=> styles? '#f8f8f8': 'white'};
    }
`


export const MicrofoneButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    cursor: pointer;

    &:hover {
        background-color: #d3d3d3;
    }

    @media (max-width: 800px){
        background-color: white;
        margin-left: 0;
    }
    @media (max-width: 500px){
        display: none;
    }
`

export const ClearButtonContainer = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 10px;
    border-radius: 50%;
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    visibility: hidden;

    &:hover {
        background-color: #f2f2f2;
    }
`


export const HeaderButtons = styled.div`
    width: 210px;
    display: flex;

    @media (max-width: 500px){
        justify-content: center;
        width: 160px;
    }
    @media (max-width: 400px){
        justify-content: center;
        width: 100px;
    }

`


export const ModalContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 20px;
    width: 280px;
    height: auto;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    z-index: 4;

`
export const PerfilTitleContainer = styled.div`  
    height: 95px;
    padding: 12px 10px 0px 10px;
    display: flex;
    flex-direction: row;

`

export const PerfilImage = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Images = styled.image`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
`
export const TitleContainer = styled.div`
    width: 80%;
    padding: 2px 10px;
    font-size: 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    height: 50%;
    font-size: 16px;
`
export const Views = styled.div`
    height: 50%;
    font-size: 14px;
    margin-bottom: 4px;
    color: #1a75ff;
    cursor: pointer;
`

export const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: #d3d3d3;
    
`

export const ContainerOptionsModal = styled.div`
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const MenuItem = styled.div`
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    min-height: 40px;
    display: flex;
    align-items: center;
    font-size: 26px;
    text-align: center;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
`

export const MenuModal = styled.div<{visibility: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    visibility: ${({visibility})=> visibility? 'visible': 'hidden'};

`

export const SearchModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
`