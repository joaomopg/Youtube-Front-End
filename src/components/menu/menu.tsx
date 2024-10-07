import { useContext, useEffect, useState } from "react";
import { Container, Divider, MenuItem } from "./menustyle";
import { menuContext } from "../../context/menuContext";
import { ButtonImage } from "../header/headerstyle";
import Inicio from "../../assets/images/botao-de-inicio.png"
import Inscricoes from "../../assets/images/inscricoes-abertas.png"
import Shorts from "../../assets/images/shorts.png"
import YoutubeMusic from "../../assets/images/youtube-music.png"
import Perfil from "../../assets/images/usuario-de-perfil.png"
import History from "../../assets/images/historia.png"
import Playlists from "../../assets/images/playlist.png"
import Videos from "../../assets/images/botao-play.png"
import Relogio from "../../assets/images/relogio.png"
import Like from "../../assets/images/gostar.png"
import Dowload from "../../assets/images/dowload.png"
import Fogo from "../../assets/images/chama.png"
import Shopping from "../../assets/images/sacola.png"
import Musica from "../../assets/images/notas-musicais.png"
import Filme from "../../assets/images/ardosia-de-filme.png"
import aoVivo from "../../assets/images/aovivo.png"
import Controlador from "../../assets/images/controlador.png"
import Noticia from "../../assets/images/jornal-dobrado.png"
import Trofeu from "../../assets/images/trofeu.png"
import Curso from "../../assets/images/computador-desktop.png"
import Podcast from "../../assets/images/podcast (2).png"
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/categoryContext";
import { useCloseMenu } from "../../context/closeMenu";


function Menu({queryMenu}: any){

    const navigate = useNavigate();

    const inicioItens = [
        {icon: Inicio, name: "Início", link: "/"},
        {icon: Shorts, name: "Shorts", link: "/shorts"},
        {icon: Inscricoes, name: "Inscrições", link: "/inscricoes"},
        {icon: YoutubeMusic, name: "Youtube Music", link: "/youtubemusic"},
    ]
    const voceItens = [
        {icon: Perfil, name: "Seu canal", link: "/seucanal"},
        {icon: History, name: "Histórico", link: "/history"},
        {icon: Playlists, name: "Playlists", link: "/playlists"},
        {icon: Videos, name: "Seus vídeos", link: "/yourvideos"},
        {icon: Relogio, name: "Assistir mais tarde", link: "/assistirmaistarde"},
        {icon: Like, name: "Vídeos com 'Gostei'", link: "/likes"},
        {icon: Dowload, name: "Dowloads", link: "/dowloads"}
    ]
    const explorarItens = [
        {icon: Fogo, name: "Em alta", link: "/emalta", id: "0"},
        {icon: Shopping, name: "Shopping", link: "/shopping", id: "0"},
        {icon: Musica, name: "Musica", link: "/", id: "10"},
        {icon: Filme, name: "Filmes", link: "/filmes", id: "0"},
        {icon: aoVivo, name: "Ao vivo", link: "/aovivo", id: "0"},
        {icon: Controlador, name: "Jogos", link: "/", id: "20"},
        {icon: Noticia, name: "Notícias", link: "/noticias", id: "0"},
        {icon: Trofeu, name: "Esportes", link: "/", id: "17"},
        {icon: Curso, name: "Cursos", link: "/cursos", id: "0"},
        {icon: Podcast, name: "Podcasts", link: "/podcasts", id: "0"},
    ]

    const {setCategoryId, categoryId} = useCategoryContext()

    function Icons(link: string, id: string){
        navigate(link)
        setCategoryId(id)
        console.log(categoryId)
    }
        
    const {menu, setMenu} = useContext(menuContext)
    
    const handleWidth = () => {
        if (window.innerWidth < 1400){
            setMenu(false)
        } 
    }

    useEffect(()=> {

    }, [queryMenu])

    const {closeMenu, setCloseMenu} = useCloseMenu()

    const handleMenu = () => {
        if (window.innerWidth < 930){
            setCloseMenu(true)
        } else {
            setCloseMenu(false)
        }
    }

    useEffect(()=> {
        handleMenu();
        window.addEventListener('resize', handleMenu)
        handleWidth();
        window.addEventListener('resize', handleWidth)
   }, [])

    return (
        
        <Container width={menu} queryMenu={queryMenu} closeMenu={closeMenu}>
            {inicioItens.map((item)=> (
                <MenuItem model={menu} queryMenu={queryMenu} onClick={()=> navigate(item.link)}>
                    <ButtonImage alt="Icon" src={item.icon} margin={menu} queryMenu={queryMenu}/>
                    {item.name}              
                </MenuItem>
            ))}
            <Divider styles={menu} queryMenu={queryMenu}></Divider>
            <MenuItem model={menu} style={{fontWeight: "bolder", fontSize: "18px"}} queryMenu={queryMenu}>Você</MenuItem>
            {voceItens.map((item)=> (
                <MenuItem model={menu} queryMenu={queryMenu} onClick={()=> navigate(item.link)}>
                    <ButtonImage alt="Icon" src={item.icon} margin={menu} queryMenu={queryMenu}/>
                    {item.name}              
                </MenuItem>
            ))}
            <Divider styles={menu} queryMenu={queryMenu}></Divider>
            <MenuItem model={menu} style={{fontWeight: "bolder", fontSize: "18px"}} queryMenu={queryMenu}>Explorar</MenuItem>
            {explorarItens.map((item)=> (
                <MenuItem model={menu} queryMenu={queryMenu} onClick={()=> Icons(item.link, item.id)}>
                    <ButtonImage alt="Icon" src={item.icon} margin={menu} queryMenu={queryMenu}/>
                    {item.name}              
                </MenuItem>
            ))}
            

        </Container>

    )
}

export default Menu;