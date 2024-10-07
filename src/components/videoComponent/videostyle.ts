import styled from "styled-components";

interface Props {
    styles: boolean
    searchStyle: boolean
}

export const Container = styled.div<Props>`
    width: ${({styles})=> styles? "24%": "19%"};
    max-height: 38vh;
    height: 38vh;
    display: flex;
    flex-direction: column;

    @media (max-width: 1669px){
        width: ${({styles})=> styles? "32%": "24%"};
    }
    @media (max-width: 1500px){
        width: 32%;
    }
    @media (max-width: 1300px){
        width: 48%;
        height: 38vh;
    }
    @media (max-width: 1000px){
        height: 36vh;
    }
    @media (max-width: 900px){
        height: 34vh;
    }
    @media (max-width: 800px){
        height: 31vh;
    }
    @media (max-width: 730px){
        width: 90vw;
        height: 40vh;
    }
    @media (max-width: 550px){
        height: 36vh;
    }
    @media (max-width: 450px){
        height: 33vh;
    }
    @media (max-width: 400px){
        height: 29vh;
    }
`

export const VideoContainer = styled.div<{styles?: boolean}>`
    width: 100%;
    height: ${({styles})=> styles? "240px": "210px"};
    border-radius: 14px;
    overflow: hidden;

    @media (max-width: 1500px){
        height: 240px;
    }
    @media (max-width: 1300px){
        height: 260px;
    }
    @media (max-width: 730px){
        height: 300px;
    }

`
export const VideoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 14px;

`
export const PerfilTitleContainer = styled.div<{styles?: boolean}>`
    width: 100%;
    height: ${({styles})=> styles? "105px": "100px"};
    display: flex;
    flex-direction: row;

`

export const PerfilImage = styled.div`
    width: 15%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Images = styled.image<{colors: string}>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${({colors})=> colors};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TitleContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    height: auto;
    padding: 4px;
    max-height: 50px;
    font-size: 16px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Views = styled.div`
    height: auto;
    font-size: 14px;
    margin-left: 4px;
`


