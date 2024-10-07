import React, { useContext, useEffect, useState } from "react";
import { Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonImage, 
    SearchContainer, 
    InputContainer, 
    SearchInput, 
    SearchButtonContainer,
    MicrofoneButtonContainer,
    HeaderButtons,
    ButtonLogin,
    ModalContainer,
    PerfilTitleContainer,
    PerfilImage,
    Images,
    TitleContainer,
    Title,
    Views,
    Divider,
    ContainerOptionsModal,
    MenuItem,
    ClearButtonContainer,
    MenuModal,
    SearchModal,
} from "./headerstyle";
import HamburguerIcon from "../../assets/images/hamburguer.png";
import Logo from "../../assets/images/Youtube-Logo.png";
import Search from "../../assets/images/Search.png"
import Microfone from '../../assets/images/Microfone.png'
import Video from '../../assets/images/Video.png'
import Sino from '../../assets/images/Sino.png'
import Google from '../../assets/images/pesquisa.png'
import Perfil2 from '../../assets/images/perfil2.png'
import ChangeAcc from '../../assets/images/ChangeAcc.png'
import Sair from '../../assets/images/sair.png'
import YtStudio from '../../assets/images/youtube.png'
import YtPremium from '../../assets/images/p.png'
import Dinheiro from '../../assets/images/dinheiro.png'
import clear from '../../assets/images/x.png'
import Voltar from '../../assets/images/de-volta.png'
import { menuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useSearchContext } from "../../context/searchContext";
import { useVideosContext } from "../../context/videosContext";
import Menu from "../menu/menu";



function Header({queryMenu}: any){

    const navigate = useNavigate();
    const {login, user, LogOut} = useContext(UserContext);
    const {menu, setMenu} = useContext(menuContext);
    const [modal, setModal] = useState(false)

    const modalItens = [
        {name: 'Conta do Google', image: `${Google}`},
        {name: 'Mudar de conta', image: `${ChangeAcc}`}
    ]
    const logOutItem = {name: 'Sair', image: `${Sair}`}

    const modalItens2 = [
        {name: 'Youtube Studio', image: `${YtStudio}`},
        {name: 'Seus benefícios do Premium', image: `${YtPremium}`},
        {name: 'Compras e assinaturas', image: `${Dinheiro}`}
    ]

    function ClearLogOut() {
        setModal(false);
        LogOut();
    }

    const firstLetter = user.nome?.charAt(0) || '';

    const {setLoginModal} = useContext(UserContext);
    const {setVideosSearch} = useVideosContext();

    function LoginBtn() {
        navigate('/login')
        setLoginModal(true)
    }

    const [inputValue, setInputValue] = useState('');

    function ClearButton(inputText: string) {
        setInputValue(inputText);
        if(inputValue !== ''){
            const clearbtn = document.getElementById('clearbtn') as HTMLDivElement
            if (clearbtn){
                clearbtn.style.visibility = 'visible'
            }
        } else {
            const clearbtn = document.getElementById('clearbtn') as HTMLDivElement
            if (clearbtn){
                clearbtn.style.visibility = 'hidden'
            }
        }
    }

    function Clear() {
        setInputValue('');
        const clearbtn = document.getElementById('clearbtn') as HTMLDivElement;
        if (clearbtn) {
            clearbtn.style.visibility = 'hidden'; // Oculta o botão clear imediatamente
        }
    }


    const {setSearch} = useSearchContext()

    function goSearch(inputValue: string){
        navigate('/search');
        setSearch(inputValue);
        setVideosSearch(true);
        
    }
    
    const handleKeyDown: (event: any) => void = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter'){
            if (inputValue){
                goSearch(inputValue);
            }
        }
    }

    const [menuModal, setMenuModal] = useState(false)
    
    function handleMenuBtn (){
        if (window.innerWidth > 1400){
            setMenu(!menu)
            setMenuModal(false)
        } else {
            setMenuModal(true)
        }
    }

    const [buttonsDisplay, setButtonsDisplay] = useState(false)

    const handleWidth = () => {
        let width = window.innerWidth
        if (width < 500){
            setButtonsDisplay(true)
        } else {
            setButtonsDisplay(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', handleWidth)
        handleWidth()
    }, [])

    const [searchModal, setSearchModal] = useState(false)
    const [searchButtons, setSearchButtons] = useState(false)

    function openModalSearch() {
        setSearchModal(true)
    }

    const SearchButtons = () => {
        const width = window.innerWidth
        if (width < 700){
            setSearchButtons(true)
        } else {
            setSearchButtons(false)
            setSearchModal(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', SearchButtons)
    }, [])

    return(

        <Container>
            <LogoContainer>
                <ButtonContainer margin = "0 10px 0 0" onClick={() => handleMenuBtn()}>
                    <ButtonImage alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img style={{cursor: "pointer", width: "100px"}} alt="Youtube Logo" src={Logo} onClick={()=> navigate('/')}/>
            </LogoContainer>

            <SearchContainer>
                <InputContainer>
                    <SearchInput
                    type="text"
                    value={inputValue}
                    onChange={(e)=> ClearButton(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Pesquisar"/>
                    <ClearButtonContainer id="clearbtn" onClick={()=> Clear()}>
                        <ButtonImage alt="Clear" src={clear}/>
                    </ClearButtonContainer>
                </InputContainer>
                <SearchButtonContainer 
                style={searchButtons? {display: 'none'} : {display: 'flex'}}
                onClick={()=> goSearch(inputValue)}>
                    <ButtonImage alt="Search Image" src={Search}/>
                </SearchButtonContainer>
                <SearchButtonContainer 
                style={searchButtons? {display: 'flex'} : {display: 'none'}} 
                onClick={()=> openModalSearch()}>
                    <ButtonImage alt="Search Image" src={Search}/>
                </SearchButtonContainer>
                <MicrofoneButtonContainer>
                    <ButtonImage alt="Microfone Image" src={Microfone}/>
                </MicrofoneButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer display={buttonsDisplay}>
                    <ButtonImage alt="Criar vídeos" src={Video}/>
                </ButtonContainer>
                <ButtonContainer display={buttonsDisplay}>
                    <ButtonImage alt="Notificações" src={Sino}/>
                </ButtonContainer>
                {login? 
                    <ButtonContainer onClick={()=> setModal(!modal)}>
                        {firstLetter}
                    </ButtonContainer>
                :
                    <ButtonLogin onClick={()=> LoginBtn()}>
                        <ButtonImage style={{marginRight: "6px"}} alt="Ícone de Perfil" src={Perfil2}/>
                        <div style={{
                            color: "#0494fc", 
                            fontWeight: "500",
                            fontSize: "15px"}}>Fazer login</div>
                    </ButtonLogin>
                }
            </HeaderButtons>

            <ModalContainer style={modal? {visibility: 'visible'}: {visibility: 'hidden'}}> 
                <PerfilTitleContainer>
                    <PerfilImage>
                        <Images/>
                    </PerfilImage>
                    <TitleContainer>{user.nome}
                        <Title>{user.email}</Title>
                        <Views>Acessar seu canal</Views>
                    </TitleContainer>
                </PerfilTitleContainer>
                <Divider style={{marginBottom: "10px"}}/>
                <ContainerOptionsModal>
                    {modalItens.map((item)=> (
                        <MenuItem>
                            <ButtonImage src={item.image} style={{width: "22px"}}/>
                            <div style={{fontSize: "15px", marginLeft: "14px"}}>{item.name}</div>
                        </MenuItem>
                    ))}
                    <MenuItem onClick={()=> ClearLogOut()}>
                        <ButtonImage src={logOutItem.image} style={{width: "22px"}}/>
                        <div style={{fontSize: "15px", marginLeft: "14px"}}>{logOutItem.name}</div>
                    </MenuItem>
                </ContainerOptionsModal>
                <Divider style={{margin: "10px 0px"}}/>
                <ContainerOptionsModal style={{marginBottom: '14px'}}>
                    {modalItens2.map((item)=> (
                        <MenuItem>
                            <ButtonImage src={item.image} style={{width: "22px"}}/>
                            <div style={{fontSize: "15px", marginLeft: "14px"}}>{item.name}</div>
                        </MenuItem>
                    ))}
                </ContainerOptionsModal>
            </ModalContainer>

            <MenuModal onClick={()=> setMenuModal(false)} visibility={menuModal}>
                <LogoContainer style={{width: '250px', backgroundColor: 'white'}}>
                    <ButtonContainer margin = "2px 10px 0px 16px" onClick={() => handleMenuBtn()}>
                        <ButtonImage alt="Hamburguer Icon" src={HamburguerIcon}/>
                    </ButtonContainer>
                    <img style={{cursor: "pointer", width: "100px", marginTop: '2px'}} alt="Youtube Logo" src={Logo} onClick={()=> navigate('/')}/>
                </LogoContainer>
                <Menu queryMenu={menuModal}/>
            </MenuModal>

            <SearchModal style={searchModal? {display: 'flex', justifyContent: 'center'}: {display: 'none'}}>
                <ButtonContainer style={
                    {marginLeft: '8px', position: 'absolute', left: 0}} 
                    onClick={()=> setSearchModal(false)}>
                    <ButtonImage src={Voltar} alt="Voltar"/>
                </ButtonContainer>
                
                <SearchContainer>
                    <InputContainer display={searchModal}>
                        <SearchInput
                        type="text"
                        value={inputValue}
                        onChange={(e)=> ClearButton(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Pesquisar"/>
                        <ClearButtonContainer id="clearbtn" onClick={()=> Clear()}>
                            <ButtonImage alt="Clear" src={clear}/>
                        </ClearButtonContainer>
                    </InputContainer>
                    <SearchButtonContainer styles={searchModal}
                    onClick={()=> goSearch(inputValue)}>
                        <ButtonImage alt="Search Image" src={Search}/>
                    </SearchButtonContainer>
                </SearchContainer>

            </SearchModal>
        </Container>
    )
}

export default Header; 