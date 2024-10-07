import { useContext, useEffect, useState } from "react";
import { Container, ContainerAll } from "./searchStyled";
import { menuContext } from "../../context/menuContext";
import axios from "axios";
import { useVideosContext } from "../../context/videosContext";
import { useSearchContext } from "../../context/searchContext";
import VideoSearch from "../../components/videosSearch/videosSearch";

function Search() {
    
    const {videos, setVideos} = useVideosContext()
    const {search} = useSearchContext()
    const API_KEY = 'AIzaSyBi2mcvgzSTJegXkyEelwzHqLdmIVI-h-s';
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`

    useEffect(()=> {
        load();
    },[search])

    async function load() {
        try {
            const resposta = await axios.get(URL);
            setVideos(resposta.data.items)
            console.log(resposta.data.items)
            
        } catch (error) {
            console.log(error)
        }
    }

    const {menu} = useContext(menuContext)
    const [show] = useState(false)

    
    return (
        <ContainerAll styles={menu}>  

            <Container styles={menu} showMore={show}>
                {videos.map((video)=> (
                    <VideoSearch video={video}/>
                ))}
                
            </Container>

        </ContainerAll>
    )
}

export default Search;