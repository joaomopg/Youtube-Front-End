import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.tsx";
import Menu from "./components/menu/menu.tsx";
import Home from "./pages/home/home.tsx"
import History from "./pages/history/history.tsx";
import { UserStore } from "./context/userContext.tsx";
import Login from "./pages/login/login.tsx";
import { CategoryProvider } from "./context/categoryContext.tsx";
import SignUp from "./pages/signUp/signUp.tsx";
import Search from "./pages/Search/search.tsx";
import YourVideos from "./pages/YourVideos/yourVideos.tsx";
import { CloseMenuStorage } from "./context/closeMenu.tsx";



function App() {

  return (
    <CloseMenuStorage>
    <UserStore>
    <CategoryProvider>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div style={{width: "100%", display: "flex"}}>
        <Menu/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/yourvideos" element={<YourVideos/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </CategoryProvider>
    </UserStore>
    </CloseMenuStorage>
  );
}

export default App;
