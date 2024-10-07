import styled from "styled-components";


export const Container = styled.div<{styles: boolean}>`
    width: ${({styles})=> styles? "23%": "18%"};
    height: ${({styles})=> styles? "37vh": "35vh"};
    display: flex;
    flex-direction: column;

    @media (max-width: 1669px){
        width: 23%
    }
    @media (max-width: 1400px){
        width: 31%
    }
    @media (max-width: 930px){
        width: 48%
    }
    @media (max-width: 700px){
        width: 90%;
    }
`
export const VideoContainer = styled.div<{styles?: boolean}>`
    width: 100%;
    height: ${({styles})=> styles? "220px": "200px"};
    border-radius: 14px;
    overflow: hidden;

    @media (max-width: 700px){
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`