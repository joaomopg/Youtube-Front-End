import styled from "styled-components";

interface Props {
    styles: boolean
    searchStyle: boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 630px){
        flex-direction: column;
    }

`
export const VideoContainer = styled.div<{styles?: boolean}>`
    min-width: 460px;
    height: ${({styles})=> styles? "280px": "260px"};
    border-radius: 14px;
    overflow: hidden;
    margin-right: 16px;

    @media (max-width: 1100px){
        min-width: 380px;
        height: 240px;
    }
    @media (max-width: 930px){
        min-width: 380px;
        height: 240px;
    }
    @media (max-width: 750px){
        min-width: 320px;
        height: 200px;
    }
    @media (max-width: 630px){
        min-width: 95%;
        height: 280px;
    }
    @media (max-width: 550px){
        min-width: 95%;
        height: 240px;
    }
    @media (max-width: 440px){
        min-width: 100%;
        height: 190px;
    }
`
export const VideoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 14px;


`
export const PerfilTitleContainer = styled.div<{styles?: boolean}>`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 630px){
        flex-direction: row-reverse;
    }

`

export const PerfilImage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;

    @media (max-width: 630px){
        width: 20%;
        flex-direction: column;
    }
`
export const Images = styled.image<{colors: string}>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${({colors})=> colors};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 630px) {
        margin-top: 4px;
    }
`
export const TitleContainer = styled.div`
    width: auto;
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
interface ViewsProps {
    active?: boolean
}

export const Views = styled.div<ViewsProps>`
    height: auto;
    font-size: 14px;
    margin-left: 4px;
    margin-bottom: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 630px){
        display: ${({active})=> active? 'none': '-webkit-box'};
    }
`
interface ChannelTitleProps {
    widthConfigs?: boolean
}

export const ChannelTitle = styled.div<ChannelTitleProps>`
    height: auto;
    font-size: 14px;
    margin-left: 4px;
    margin-bottom: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 630px){
        display: ${({widthConfigs})=> widthConfigs? 'none': '-webkit-box'};
    }
`

