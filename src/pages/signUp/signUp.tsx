import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { 
    CheckBoxContainer,
    ContainerAll, 
    Inputs, 
    InputsContainer, 
    LoginContainer, 
    LogoImage, 
    LogoTextContainer,
    SignInBtn,
    SignUpContainer,
    SpanSmall,
    Text,
    TextSmall,
    InputsContainerPassword,
    InputsName

} from "./sign_Up";
import googleLogo from '../../assets/images/google.png'
import { useNavigate } from "react-router-dom";
import { InputsPassword } from "../login/login";

function SignUp() {

    const {SignUp, login, signUpModal, setSignUpModal} = useContext(UserContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [text, setText] = useState(false)
    const [textName, setTextName] = useState(false)
    const [textEmail, setTextEmail] = useState(false)
    const [textPassword, setTextPassword] = useState(false)
    const [textPasswordConfirm, setTextPasswordConfirm] = useState(false)
    const [textPasswordFill, setTextPasswordFill] = useState(false)

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

        if(name !== '' && email !== '' && password !== ''){
            try {
                await SignUp(name, email, password);
                
            } catch (error) {
                console.log('Erro durante o cadastro:', error);
            }
        }
    }

    function loginModal(){
        setSignUpModal(false);
        navigate('/login')
    }
    

    return (
        <ContainerAll style={signUpModal? {display: 'flex'}: {display: 'none'}}>
            <LoginContainer>
                <LogoTextContainer>
                    <LogoImage src={googleLogo} alt="google logo"/>
                    <Text>Crie sua conta nesse projeto</Text>
                    <TextSmall>Prosseguir no youtube</TextSmall>  
                </LogoTextContainer>
                <InputsContainer>
                    <InputsName
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)} 
                    placeholder="Nome Sobrenome"
                    style={textName? {marginBottom: '0px'}: {marginBottom: '8px'}}
                    textName = {textName}
                    />
                    <SpanSmall style={textName? {display: 'block'}: {display: 'none'}}>Digite o seu nome</SpanSmall>
                    <Inputs
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    placeholder="E-mail"
                    text = {text}
                    />
                    <SpanSmall style={text? {display: 'block'}: {display: 'none'}}>Digite o seu email</SpanSmall>
                    <SpanSmall style={textEmail? {display: 'block'}: {display: 'none'}}>Email inválido</SpanSmall>
                    <InputsContainerPassword>
                        <InputsPassword 
                        type={mostrarSenha? 'text': 'password'} 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Senha"
                        textPassword = {textPassword}
                        style={{marginTop: '8px', width: '48%'}}
                        />
                        <InputsPassword 
                        type={mostrarSenha? 'text': 'password'} 
                        onChange={(e)=> setPasswordConfirm(e.target.value)}
                        placeholder="Confirmar senha"
                        textPassword = {textPassword}
                        style={{marginTop: '8px', width: '48%'}}
                        />
                    </InputsContainerPassword>
                        <SpanSmall style={textPasswordConfirm? {display: 'block'}: {display: 'none'}}>As senhas não são correspondentes</SpanSmall>
                        <SpanSmall style={textPasswordFill? {display: 'block'}: {display: 'none'}}>Digite a sua senha</SpanSmall>
                        <SpanSmall style={ {display: 'block', color: '#737373', margin: '4px 0px'} }
                        >Use 8 caracteres com uma combinação de letras, números e símbolos
                        </SpanSmall>
                </InputsContainer>
                <CheckBoxContainer>
                    <input type="checkbox" onClick={()=> toggleSenha()}/>
                    <span style={{marginLeft: '6px'}}>Mostrar senha</span>
                </CheckBoxContainer>
                <SignUpContainer>
                    <span onClick={()=> loginModal()} style={{color: '#0494fc', fontWeight: '500', cursor: 'pointer'}}>
                        Faça login em vez disso
                    </span>
                    <SignInBtn onClick={()=> {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if(name === ''){
                            setTextName(true)
                        } else {
                            setTextName(false)
                        }
                        if(email === ''){
                            setText(true)
                        } else if (email !== '' && !emailRegex.test(email)) {
                            setText(false)
                            setTextEmail(true)
                        } else if (email !== '' && emailRegex.test(email)){
                            setText(false)
                            setTextEmail(false)
                        }
                        if(password === ''){
                            setTextPassword(true)
                        } else {
                            setTextPassword(false)
                        }
                        if(password === '' || passwordConfirm === ''){
                            setTextPasswordFill(true);
                        } else {
                            setTextPasswordFill(false)
                        }
                        if(password !== passwordConfirm){
                            setTextPasswordConfirm(true)
                        } else if (password === passwordConfirm){
                            setTextPasswordConfirm(false)
                        }
                        if (name !== '' && password !== '' && password === passwordConfirm){
                            onSubmit();
                        }


                    }}>Próxima</SignInBtn> 
                </SignUpContainer>
            </LoginContainer>  
        </ContainerAll>

    )
}

export default SignUp;