import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { menuContext } from "../../context/menuContext";
import { 
    CheckBoxContainer,
    ContainerAll, 
    Inputs, 
    InputsContainer, 
    InputsPassword, 
    LoginContainer, 
    LogoImage, 
    LogoTextContainer,
    SignInBtn,
    SignUpContainer,
    SpanSmall,
    Text,
    TextSmall,

} from "./login";
import googleLogo from '../../assets/images/google.png'
import { useNavigate } from "react-router-dom";

function Login() {

    const {handleLogin, login, setSignUpModal} = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loginModal} = useContext(UserContext)

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [text, setText] = useState(false)
    const [textPassword, setTextPassword] = useState(false)

    const toggleSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };
    
    const navigate = useNavigate();

    useEffect(()=> {
        if(login){
            navigate('/');
        }
    }, [login])

    async function onSubmit() {

        if(email !== '' && password !== ''){
            try {
                await handleLogin(email, password);
                
            } catch (error) {
                console.log('Erro durante o login:', error);
            }
        }
    }

    function signUpBtn() {
        navigate('/sign-up');
        setSignUpModal(true);
    }
    

    return (
        <ContainerAll style={loginModal? {display: 'flex'}: {display: 'none'}}>
            <LoginContainer>
                <LogoTextContainer>
                    <LogoImage src={googleLogo} alt="google logo"/>
                    <Text>Fazer Login</Text>
                    <TextSmall>Prosseguir no youtube</TextSmall>  
                </LogoTextContainer>
                <InputsContainer>
                    <Inputs
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    placeholder="E-mail"
                    text = {text}
                    />
                    <SpanSmall style={text? {display: 'block'}: {display: 'none'}}>Digite o seu email</SpanSmall>
                    <InputsPassword 
                    type={mostrarSenha? 'text': 'password'} 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Senha"
                    style={{marginTop: '8px'}}
                    textPassword = {textPassword}
                    />
                    <SpanSmall style={textPassword? {display: 'block'}: {display: 'none'}}>Digite a sua senha com 8 caracteres</SpanSmall>
                </InputsContainer>
                <CheckBoxContainer>
                    <input type="checkbox" onClick={()=> toggleSenha()}/>
                    <span style={{marginLeft: '6px'}}>Mostrar senha</span>
                </CheckBoxContainer>
                <SignUpContainer>
                    <span onClick={()=> signUpBtn()} style={{color: '#0494fc', fontWeight: '500', cursor: 'pointer'}}>Criar conta</span>
                    <SignInBtn onClick={()=> {
                        if(email === ''){
                            setText(true)
                        } else {
                            setText(false)
                        }
                        if(password === ''){
                            setTextPassword(true)
                        } else {
                            setTextPassword(false)
                        }

                        onSubmit();

                    }}>Próxima</SignInBtn> 
                </SignUpContainer>
            </LoginContainer>  
        </ContainerAll>
    )
}

export default Login;