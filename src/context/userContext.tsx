import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStore = ( {children}: any) => {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState<User | {}>({});   // Armazena os dados do usuário
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [yourVideos, setYourVideos] = useState<YourVideos[]>([]);


    interface YourVideos {
        video_id: string,
        title: string,
        description: string
      }

    interface User {
        nome: string
        email: string
        id: number
    }

    const SignUp = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(({data})=> {
            alert(`${data.message}`);
            handleLogin(email, password);
        }).catch((error)=> {
            alert('Não foi possível criar um usuário.')
        })
    }
    
    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data })=> {
            setUser(data.user);
            setLogin(true);
        }).catch((error)=> {
            console.log('Erro na tentativa de pegar as informações', error)
        })
    }

    useEffect(()=> {
        getUser(token);
    },[token])

    const handleLogin = (email: string, password: string) => {   //Função que vai lidar com o login
        api.post('/user/sign-in', {email, password}).then(({data})=> {  
            setLogin(true);
            localStorage.setItem('token', data.token)
            setToken(data.token)
            getUser(data.token)  // chamar os dados do usuário (get-user)
            console.log(data.token)
            setLoginModal(false);
        }).catch((error)=> {
            alert('Usuário ou senha incorretos. Verifique os dados e tente novamente.')
            console.log('Não foi possível fazer o login');
            setLoginModal(true);
        })
    }

    const LogOut = () => {
        setLogin(false);
        localStorage.removeItem('token');
        setUser({});
    }

    function AddVideos(url: string, title: string, description: string, user_id: string) {
        api.post(`/videos/create-video/${user_id}`, 
          {
            url,          
            title,        
            description,  
          }, 
          {
            headers: { Authorization: token } 
          }
        ).then(({ data }) => {
          getVideos(user_id)
          alert(`${data.message}`)
          
        }).catch((error) => {
          alert('Erro ao tentar criar o vídeo');
        });
    }

    function getVideos(user_id: string){
        api.get(`/videos/get-videos/${user_id}`, {headers: {Authorization: token}}).then(({data})=> {
          setYourVideos(data.videos)
        }).catch((error)=>{
          console.log('Erro ao tentar pegar os vídeos do usuário')
        })
    }

    function deleteVideos(title: string, user_id: string) {
      api.delete('/videos/delete-videos', {
        data: { title }, // Envia o título no corpo da requisição
        headers: { Authorization: token }
      })
        .then(({ data }) => {
          getVideos(user_id)
          alert(`${data.message}`);
        })
        .catch((error) => {
          alert('Erro na tentativa de excluir o vídeo');
        });
    }

    return (
        <UserContext.Provider value={{
            login, 
            user,
            handleLogin,
            LogOut,
            loginModal,
            setLoginModal,
            SignUp,
            signUpModal,
            setSignUpModal,
            token,
            getVideos,
            yourVideos, 
            setYourVideos,
            AddVideos,
            deleteVideos
        }}>
            {children}
        </UserContext.Provider>
    )
}