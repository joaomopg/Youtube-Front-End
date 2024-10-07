import { useContext, useEffect, useState } from "react";
import { 
    ChannelTitle,
    Container, 
    Images, 
    PerfilImage, 
    PerfilTitleContainer, 
    Title, 
    TitleContainer, 
    VideoContainer, 
    VideoImage, 
    Views,  } from "./videoSearchStyle";
import { menuContext } from "../../context/menuContext";
import { ButtonImage, ButtonContainer } from "../header/headerstyle";
import Cardapio from "../../assets/images/cardapio.png";
import { useVideosContext } from "../../context/videosContext";

function VideoSearch( {video}: any){

    const {menu} = useContext(menuContext);

    function TransformViews() {
        
        const viewCount = Number((Math.random()*10000000).toFixed(0))
        console.log(viewCount)
    
        if (viewCount < 1000) {
            return `${video.statistics.viewCount} visualizações`;
        }
        if (viewCount >= 1000 && viewCount < 1000000) {
            return `${(viewCount / 1000).toFixed()} mil visualizações`;
        }
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(1)} mi visualizações`;
        }
    }
        
    function TransformDate(){

        const publishedAt = video.snippet.publishedAt
        const publishedAtData = new Date(publishedAt)
        const publishedAtString = publishedAtData.toString()
        const publishedAtArray = publishedAtString.split(' ')

        //Meses
        const publishedAtMonth = publishedAtArray[1] 

        function transformMonth(monthValue: string): string {
            const months: { [key: string]: string } = {
                'Jan': '01',
                'Feb': '02',
                'Mar': '03',
                'Apr': '04',
                'May': '05',
                'Jun': '06',
                'Jul': '07',
                'Aug': '08',
                'Sep': '09',
                'Oct': '10',
                'Nov': '11',
                'Dec': '12'
            };
            return months[monthValue] || 'Mês inválido'
        }

        const monthPublished = transformMonth(publishedAtMonth)
        const monthPublishedNum = Number(monthPublished)

        // Data atual 
        const now = new Date() 
        const dataString = now.toString()
        const dataArray = dataString.split(' ')
        const dataMonth = dataArray[1] //Mês atual
        const dataYear = dataArray[3] // Ano atual
        const dataDay = dataArray[2] //Dia atual
        const dataHours = dataArray[4] 

        const currentYear = Number(dataYear)

        const divide = dataHours.split(':')
        const horas = divide[0] //Hora atual
        const horasNum = Number(horas)
        const minutos = divide[1] //Minuto atual
        const minutosNum = Number(minutos)
        const segundos = divide[2] //Segundo atual
        const segundosNum = Number(segundos)

        
        const currentMonth = transformMonth(dataMonth)
        const currentMonthNum = Number(currentMonth)

        const currentDay = Number(dataDay);


        //Anos
        const publishedAtYear = publishedAtArray[3]
        const publishedAtYearNum = Number(publishedAtYear)
        
        //Dias
        const publishedAtDay = publishedAtArray[2]
        const publishedAtDayNum = Number(publishedAtDay)

        //Horas, minutos e segundos da postagem
        const dividePublished = publishedAtArray[4]
        const dividePublishedHMS = dividePublished.split(':')
        const horasPublicated = dividePublishedHMS[0]
        const horasPublicatedNum = Number(horasPublicated)
        const minutosPublicated = dividePublishedHMS[1]
        const minutosPublicatedNum = Number(minutosPublicated);
        const segundosPublicated = dividePublishedHMS[2]



        if (currentYear - publishedAtYearNum === 0 
            && currentMonthNum - monthPublishedNum === 0
            && currentDay - publishedAtDayNum === 0){
                const resultHours = horasNum - horasPublicatedNum
                const resultMinuts = minutosNum - minutosPublicatedNum
                if (resultHours > 1){
                    return `há ${resultHours} horas`
                } else if(resultHours === 1){
                    return `há ${resultHours} hora`
                } else if (resultMinuts === 1){
                    return `há ${resultMinuts} minuto`
                } else {
                    return `há ${resultMinuts} minutos`
                }
            } else if (currentYear - publishedAtYearNum === 0 
                && currentMonthNum - monthPublishedNum === 0){
                    const resultDays = currentDay - publishedAtDayNum
                    if(resultDays === 1){
                        return `há ${resultDays} dia`
                    } else {
                        return `há ${resultDays} dias`
                    }
            } else if(currentYear - publishedAtYearNum === 0){
                const resultMonths = currentMonthNum - monthPublishedNum
                if (resultMonths === 1){
                    return `há ${resultMonths} mês`
                } else {
                    return `há ${resultMonths} meses`
                }
            } else {
                const resultYears = currentYear - publishedAtYearNum
                if (resultYears === 1){
                    return `há ${resultYears} ano`
                } else {
                    return `há ${resultYears} anos`
                }
            }


    }

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

    const {videosSearch} = useVideosContext()

    const [wConfigs, setWConfigs] = useState(false)

    const widthConfigs = () => {
        const width = window.innerWidth
        if (width < 630){
            setWConfigs(true)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', widthConfigs)
    }, [])

    return (
        <Container styles={menu} searchStyle={videosSearch}>
            <VideoContainer styles={menu}>
                <VideoImage src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}/>
            </VideoContainer>
            <PerfilTitleContainer styles={menu}>
                <TitleContainer>
                    <Title>{video.snippet.title}</Title>
                    <ChannelTitle widthConfigs={!wConfigs}>{video.snippet.channelTitle}</ChannelTitle>
                    <Views>{`${TransformViews()} ∙ ${TransformDate()}`}</Views>
                </TitleContainer>
                <PerfilImage>
                    <Images colors={randomColor}>
                        {video.snippet.channelTitle.charAt(0).toUpperCase()}
                    </Images>
                    <ChannelTitle widthConfigs={wConfigs}>{video.snippet.channelTitle}</ChannelTitle>   

                </PerfilImage>
                <Views active>{video.snippet.description}</Views> 
            </PerfilTitleContainer>
        </Container>
    )
}

export default VideoSearch;