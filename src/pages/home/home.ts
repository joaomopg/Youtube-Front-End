import styled from "styled-components";

interface ContainerAllProps {
    styles: boolean
    closeMenuWidth: boolean
}

export const ContainerAll = styled.div<ContainerAllProps>`
    width: ${({styles, closeMenuWidth})=> (closeMenuWidth? '99vw' : styles? "calc(99vw - 250px)": "calc(99vw - 100px)")};
    height: auto;
    position: absolute;
    top: 60px;
    left: ${({styles, closeMenuWidth})=> (closeMenuWidth? '0' :styles? "250px": "100px")};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`

interface BotaoProps {
    styles?:  boolean;
    showMore?: boolean;
}

export const Container = styled.div<BotaoProps>`
    height: ${({showMore})=> showMore? 'auto': '85vh'};
    box-sizing: border-box;
    margin-top: 60px;
    padding: 16px 28px 60px 28px;
    row-gap: 2vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: hidden;
    position: relative;
    
    @media (max-width: 1300px){
        height: ${({showMore})=> showMore? 'auto': '86vh'};
    }
    @media (max-width: 1000px){
        height: ${({showMore})=> showMore? 'auto': '84vh'};
    }
    @media (max-width: 900px){
        height: ${({showMore})=> showMore? 'auto': '80vh'};
    }
    @media (max-width: 800px){
        height: ${({showMore})=> showMore? 'auto': '74vh'};
    }
    @media (max-width: 730px){
        height: ${({showMore})=> showMore? 'auto': '86vh'};
    }
    @media (max-width: 550px){
        height: ${({showMore})=> showMore? 'auto': '82vh'};
    }
    @media (max-width: 450px){
        height: ${({showMore})=> showMore? 'auto': '78vh'};
    }
    @media (max-width: 400px){
        height: ${({showMore})=> showMore? 'auto': '70vh'};
        overflow-x: hidden;
    }
`

export const DividerContainer = styled.div<{styles?: boolean}>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 3;
`
export const Divider = styled.div`
    width: 96%;
    height: 1px;
    background-color: #d3d3d3;
`
export const ShowMoreBtn = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 30px;
    width: 25%;
    min-width: 144px;
    border-radius: 20px;
    border: 1px solid #d3d3d3;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-color: #d2d2d2;
    }
`
