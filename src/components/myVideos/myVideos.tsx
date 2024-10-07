import { useContext } from "react";
import { Container, Images, PerfilImage, PerfilTitleContainer, Title, TitleContainer, VideoContainer, VideoImage, Views } from "./myVideosStyled";
import { menuContext } from "../../context/menuContext";
import { ButtonContainer, ButtonImage } from "../header/headerstyle";
import Cardapio from '../../assets/images/cardapio.png'
import { UserContext } from "../../context/userContext";

interface Infos {
    infos: {
        video_id: string,
        url: string,
        title: string,
        description: string
        user_id: string
    }
}
function MyVideos({infos}: Infos) {

    function ColorChannel(Numbers: number):string{
        const Colors: { [key: number]: string} =  {
            1: '#ff9999',
            2: '#336600',
            3: '#55552b',
            4: '#4e5e8d',
            5: '#6699ff',
            6: '#997300',
            7: '#669999',
            8: '#660000',
            9: '#bfa4d8',
            10: '#ffcc99',
            11: '#538cc6',
            12: '#4d3300',
            13: '#ff4d4d',
            14: '#800000',
            15: '#004d00',
            16: '#b3b300',
            17: '#808080',
            18: '#adad85',
            19: '#006680'
        }
        return Colors[Numbers] || 'Color not found'
    }

    const randomNumber =  Math.floor(Math.random() * 20) + 1;
    const randomColor = ColorChannel(randomNumber)

    const {menu} = useContext(menuContext);
    const {user} = useContext(UserContext)

    return (
        <Container styles={menu}>
            <VideoContainer styles={menu}>
                <VideoImage src={infos.url}/>
            </VideoContainer>
            <PerfilTitleContainer styles={menu}>
                <PerfilImage>
                    <Images colors={randomColor}>
                        {user?.nome?.charAt(0).toUpperCase()}
                    </Images>   

                </PerfilImage>
                <TitleContainer>
                    <Title>{infos.title}</Title>
                    <Views>{infos.description}</Views>
                    <Views></Views>
                </TitleContainer>
                <ButtonContainer>
                    <ButtonImage alt="cardápio" src={Cardapio}/>
                </ButtonContainer>
            </PerfilTitleContainer>
        </Container>
    )
}

export default MyVideos;