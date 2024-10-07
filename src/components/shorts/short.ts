import styled from "styled-components";

export const Container = styled.div<{showMoreShorts?: boolean}>`
    height: ${({showMoreShorts})=> showMoreShorts? 'auto': '62vh'};
    box-sizing: border-box;
    padding: 76px 28px 90px 28px;
    row-gap: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    position: relative;

    @media (max-width: 930px){
        height: ${({showMoreShorts})=> showMoreShorts? 'auto': '66vh'};
    }
    @media (max-width: 700px){
        height: ${({showMoreShorts})=> showMoreShorts? 'auto': '75vh'};
    }
    @media (max-width: 580px){
        height: ${({showMoreShorts})=> showMoreShorts? 'auto': '85vh'};
    }
    @media (max-width: 490px){
        height: ${({showMoreShorts})=> showMoreShorts? 'auto': '73vh'};
    }
    @media (max-width: 390px){
        height: ${({showMoreShorts})=> showMoreShorts? 'auto': '69vh'};
    }

`
export const ShortsContainer = styled.div`
    width: 13%;
    height: 46vh;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    column-gap: 10px;

    @media (max-width: 1669px){
        width: 15.5%;
    }
    @media (max-width: 1500px){
        width: 18%;
    }
    @media (max-width: 1270px){
        width: 23%;
    }
    @media (max-width: 930px){
        height: 49vh;
        width: 30%;
    }
    @media (max-width: 700px){
        width: 47%;
        height: 59vh;
    }
    @media (max-width: 580px){
        width: 90%;
        height: 69vh;
    }
    @media (max-width: 490px){
        width: 90%;
        height: 57vh;
    }
    @media (max-width: 390px){
        width: 90%;
        height: 52vh;
    }

`
export const Short = styled.img`
    width: 100%;
    height: 84%;
    min-height: 84%;
    background-color: aliceblue;
    border-radius: 12px;
    overflow-x: hidden;
`

export const TitleButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`
export const TitleContainer = styled.div`
    width: 70%;
    height: auto;
    padding: 8px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export const ButtonContainer = styled.div`
    width: 30%;
    min-width: 40px;
    height: 50%;
    min-height: 40px;
    display: flex;
    flex-direction: row-reverse;
`
export const Button = styled.div`
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
export const Title = styled.div`
    height: auto;
    font-size: 16px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const Views = styled.div`
height: auto;
    font-size: 14px;
`

export const ShortIconContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 30px;
    padding: 0px 6px;
    box-sizing: border-box;
`
export const ShortImage = styled.img`
    width: 40px;
    height: 30px; 
`
export const ShortSpan = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
`






