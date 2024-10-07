import { useContext, useEffect, useState } from "react";
import { ButtonCreateVideo, ButtonsContainer, CloseBtn, Container, ContainerAll, InputsContainer, InputsDescription, InputsTitle, InputsURL, Modal, ModalContainer, SpanSmall, Text } from "./yourVideosStyled";
import { menuContext } from "../../context/menuContext";
import { UserContext } from "../../context/userContext";
import MyVideos from "../../components/myVideos/myVideos";
import { useCloseMenu } from "../../context/closeMenu";


function YourVideos(){

    const [modal, setModal]= useState(false)
    const [modalDelete, setModalDelete]= useState(false)
    const [url, setUrl] = useState('')
    const [textUrl] = useState(false)
    const [title, setTitle] = useState('')
    const [textTitle] = useState(false)
    const [description, setDescription] = useState('')
    const [textDescription] = useState(false)

    const {menu} = useContext(menuContext)
    const {user, getVideos, yourVideos, AddVideos, deleteVideos} = useContext(UserContext)
    const user_id = user.id
    const token = localStorage.getItem('token')
    console.log(user_id)

    useEffect(()=> {
        const user_id = user.id
        getVideos(user_id)
    }, [user, token])

    async function Add (url: string, title: string, description: string, user_id: string){
        if(url !== '' && title !== ''){
            try {
                console.log(url)
                await AddVideos(url, title, description, user_id);
                setModal(false);
            } catch (error) {
                console.log('Erro durante o login:', error);
            }
        }

    }

    async function Delete (title: string, user_id: string){
        try {
            await deleteVideos(title, user_id);
            setModal(false);
        } catch (error) {
            
        }
    
    }


    function closeModal(){
        setModal(false)
        setModalDelete(false)
    }
        
    function openModalDelete(){
        setModal(true);
        setModalDelete(true)
    }

    const {closeMenu} = useCloseMenu()

    useEffect(()=> {

    }, [closeMenu])
    
    return (
        <>
        <ContainerAll styles={menu} closeMenu={closeMenu}>
            <Text>{token === null || token === undefined ? 'Faça o login para ter acesso aos seus videos' : `${user.nome}`}</Text>
            <ButtonsContainer style={token === null || token === undefined? {display: 'none'} : {display: 'flex'}}>
                <ButtonCreateVideo 
                    onClick={()=> setModal(true)}
                    >cadastrar video
                </ButtonCreateVideo>
                <ButtonCreateVideo 
                    style={{marginLeft: '10px'}}
                    onClick={()=> openModalDelete()}
                    >deletar video
                </ButtonCreateVideo>

            </ButtonsContainer>
            <Container style={token === undefined || token === null? {display: 'none'} : {display: 'flex'}}>
                {yourVideos.map((item: any)=> (
                    <MyVideos infos={item}/>
                ))}
            </Container>
        </ContainerAll>
        <ModalContainer styles={modal}>
            <Modal>
                <CloseBtn onClick={()=> closeModal()}>X</CloseBtn>
                <Text>{modalDelete? 'Deletar um vídeo' : 'Enviar novo vídeo'}</Text>
                <InputsContainer>
                    <InputsURL
                    style={modalDelete? { display: 'none' } : { display: 'block' }}
                    id="url" 
                    type="text" 
                    value={url} 
                    onChange={(e)=> setUrl(e.target.value)} 
                    placeholder="URL da thumbnail ex: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp.jpg"
                    text = {textUrl}
                    />
                    <SpanSmall style={textUrl? {display: 'block'}: {display: 'none'}}>Digite uma URL</SpanSmall>

                    <InputsTitle
                    id="title" 
                    type="text" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} 
                    placeholder="Título do vídeo"
                    textTitle = {textTitle}
                    />
                    <SpanSmall style={textUrl? {display: 'block'}: {display: 'none'}}>Digite um título</SpanSmall>

                    <InputsDescription
                    style={modalDelete? { display: 'none' } : { display: 'block' }}
                    id="description" 
                    type="text" 
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)} 
                    placeholder="Descrição do vídeo (Opcional)"
                    textDescription = {textDescription}
                    />
                    
                </InputsContainer>
                <ButtonCreateVideo 
                    style={{
                        ...(modalDelete ? { display: 'none' } : { display: 'block' }),
                        marginTop: '20px'
                      }}
                    onClick={()=> Add(url, title, description, user_id)}
                    >Adicionar vídeo
                </ButtonCreateVideo>
                <ButtonCreateVideo 
                    style={{
                        ...(modalDelete ? { display: 'block' } : { display: 'none' }),
                        marginTop: '20px'
                      }}
                    onClick={()=> Delete(title, user_id)}
                    >Deletar vídeo
                </ButtonCreateVideo>
            </Modal>
        </ModalContainer>
        </>
    )
}
export default YourVideos;