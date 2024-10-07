import styled from "styled-components";

export const ContainerAll = styled.div<{styles?: boolean}>`
    width: ${({styles})=> styles? "calc(99vw - 250px)": "calc(99vw - 100px)"};
    height: auto;
    position: absolute;
    left: ${({styles})=> styles? "250px": "100px"};
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    @media (max-width: 930px){
        width: calc(99vw - 30px);
        left: 0px;
    }
    @media (max-width: 630px){
        width: calc(99vw - 30px);
        left: 30px;
    }
    @media (max-width: 500px){
        width: calc(99vw - 10px);
        left: 10px;
    }
`

interface BotaoProps {
    styles?:  boolean;
    showMore?: boolean;
}

export const Container = styled.div<BotaoProps>`
    height: auto;
    box-sizing: border-box;
    margin-top: 60px;
    margin-left: 100px;
    padding: 16px 28px 60px 28px;
    row-gap: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: hidden;
    position: relative;

    @media (max-width: 930px){
        margin-left: 0px;
    }
`

