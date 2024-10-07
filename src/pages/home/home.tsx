import { useEffect, useState } from "react";
import { 
    Container,
    ContainerAll,
    Divider,
    DividerContainer,
    ShowMoreBtn
} from "./home";
import Categorias from '../../components/categorias/categorias'
import { menuContext } from "../../context/menuContext";
import Video from "../../components/videoComponent/video";
import Shorts from "../../components/shorts/shorts";
import { useContext } from "react";
import axios from "axios";
import { useCategoryContext } from "../../context/categoryContext";
import { useVideosContext } from "../../context/videosContext";
import { useCloseMenu } from "../../context/closeMenu";


function Home() {
    
    const {categoryId} = useCategoryContext()
    const {videos, setVideos} = useVideosContext()
    const API_KEY = 'AIzaSyBi2mcvgzSTJegXkyEelwzHqLdmIVI-h-s';
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

    useEffect(()=> {
        load();
    },[categoryId])

    const width = window.innerWidth
    const {menu, setMenu} = useContext(menuContext)

    useEffect(()=> {
        if (window.innerWidth < 1400){
            setMenu(false)
        } 
    }, [width])

    async function load() {
        try {
            const resposta = await axios.get(url);
            setVideos(resposta.data.items)
            console.log(resposta.data.items)
            
        } catch (error) {
            console.log(error)
        }
    }

    const [show, setShowMore] = useState(false)
    
    useEffect(()=> {
        function showMore(){
            setShowMore(!show);
        }
        const showbtn = document.getElementById('showbtn') as HTMLButtonElement;
        showbtn.addEventListener('click', showMore)
    }, [show])

    const {closeMenu} = useCloseMenu()

    
    return (
        <ContainerAll styles={menu} closeMenuWidth={closeMenu}>  
            <Categorias/>

            <Container styles={menu} showMore={show}>
                {videos.map((video)=> (
                    <Video video={video}/>
                ))}

                <DividerContainer styles={menu}>
                    <Divider/>
                    <ShowMoreBtn id="showbtn">{show? 'Mostrar menos': 'Mostrar mais'}</ShowMoreBtn>
                </DividerContainer>
                
            </Container>

            <Shorts/>

            

        </ContainerAll>
    )
}

export default Home;