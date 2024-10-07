import { useEffect, useState } from "react";
import './shorts'
import { 
    Button,
    ButtonContainer,
    ButtonImage,
    Container,
    Short,
    ShortsContainer,
    Title,
    TitleButtonContainer,
    TitleContainer,
    Views, 
    ShortIconContainer,
    ShortImage,
    ShortSpan
    
} from "./short";
import Cardapio from "../../assets/images/cardapio.png"
import { Divider, DividerContainer, ShowMoreBtn } from "../../pages/home/home";
import Image from '../../assets/images/youtube-shorts5863 (1).png'

function Shorts() {

    const [showShorts, setShowShorts] = useState(false)

    useEffect(()=> {
        function showMoreShorts(){
            setShowShorts(!showShorts);
        }
        const showbtn = document.getElementById('showShortsbtn') as HTMLButtonElement;
        showbtn.addEventListener('click', showMoreShorts)
        console.log(showShorts)
    }, [showShorts])

    const videos = [
        {
            title: '😱 LANÇAMENTO 2024! HUGO BOSS BOTTLED TRIUMPH ELIXIR #perfumesimportados', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw34fb012d/images/hi-res-BR/PDPs/HB/BBT/imagem5_1000px.jpg?sw=556&sh=680&sm=fit'
        },
        {
            title: 'Real Madrid 2 x 3 Barcelona ● La Liga 16/17 Extended Goals & Highlights HD', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'data:image/jpeg;base64,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'
        },
        {
            title: 'OS PERFUMES MAIS POTENTES DO BRASIL - PREPAREM-SE', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'data:image/jpeg;base64,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'
        },
        {
            title: 'COMO IDENTIFICAR OS SINTOMAS DO TOC || TRANSTORNO OBSSESSIVO COMPULSIVO', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://static.wixstatic.com/media/a824af_be0715c0d8fe47f591decf93677a7d44~mv2.png/v1/fill/w_640,h_638,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a824af_be0715c0d8fe47f591decf93677a7d44~mv2.png'
        },
        {
            title: 'FERNANDA GENTIL - Podpah #644 - Podpah | Podcast on Spotify', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://i.scdn.co/image/ab6765630000ba8aa436cd3b756a551e4e1fdfd9'
        },
        {
            title: 'Ultra Male Intense Jean Paul Gaultier Eau de Toilette Masculino', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://www.giraofertas.com.br/wp-content/uploads/2018/03/Ultra-Male-Intense-Jean-Paul-Gaultier-05.jpg'
        },
        {
            title: 'VVWV Magical Messi Football Poster Motivational Football', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://m.media-amazon.com/images/I/61o7Uus2lhS._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: 'Chris Bumstead: “The Comeback Kid” – Revive MD Athlete Profile', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://s2-ge.glbimg.com/bwRIFU6xXdgsaIqDfNTWzYOAj6o=/0x0:1080x1346/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/9/X2s5rcQTmDBgbFYyagJg/snapinsta.app-405528061-1318666505418838-4226966609241336375-n-1080.jpg'
        },
        {
            title: 'Itachi "Badass" - Royalty [Edit/AMV]! | Very Quick. (+Project File)', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://i.ytimg.com/vi/QTmzUEDyG0U/maxresdefault.jpg'
        },
        {
            title: 'Azzaro The Most Wanted Intense Eau de Parfum', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP-9JbXWx1mvdBvZ_dMreuW-xzgTVt_UuUw&s'
        },
        {
            title: 'SUPER XANDÃO - YouTube', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://i.ytimg.com/vi/xR3P7muV9CY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAd_qtD8iCSrkel3p_lzGMfvgeCBw'
        },
        {
            title: 'O QUE É UM DEUS | OS CAVALEIROS DO ZODÍACO EDIT | MOTIVACIONAL', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0yH7voJWLtu7bz3eGoAdT5_zOptxSGETLA&s'
        },
        {
            title: '💪🏽⚡ | #darksthenics #edit #alexeubank #academia #musculação #fyp | TikTok', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3S0_hvz4eNKNuLdrRvrACrbxJMKtJL71Fg&s'
        },
        {
            title: 'CapCut_messi saindo do jogo', 
            views: `${(Math.random()* 1000000).toFixed(0)} visualizações`, 
            url: 'https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/ooIsUAyp1IyDmJJbCDEAfGnkAmleDBiDCQMpOy~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1742881643&x-signature=SXc%2B5RAjJvZ01GN0D4h7HE3Ce9U%3D'
        },
        
    ]

    return (
        
    <Container showMoreShorts={showShorts}>
        <ShortIconContainer>
            <ShortImage src={Image} alt="Short Image"/>
            <ShortSpan>Shorts</ShortSpan>
        </ShortIconContainer>
        {videos.map((item)=> (
            <ShortsContainer>
                <Short src={item.url}/>
                <TitleButtonContainer>
                    <TitleContainer>
                        <Title>{item.title}</Title>
                        <Views>{item.views}</Views>
                    </TitleContainer>
                    <ButtonContainer>
                        <Button>
                            <ButtonImage alt="cardápio" src={Cardapio}/>
                        </Button>
                    </ButtonContainer>
                </TitleButtonContainer>

            </ShortsContainer>
        ))}
        <DividerContainer style={{borderTop: '22px solid white'}}>
            <Divider/>
            <ShowMoreBtn id="showShortsbtn">{showShorts? 'Mostrar menos': 'Mostrar mais'}</ShowMoreBtn>
        </DividerContainer>
    </Container>
    )
}

export default Shorts;
    
