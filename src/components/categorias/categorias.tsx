import React from "react";
import { useContext, useEffect, useState } from "react";
import {menuContext} from '../../context/menuContext'
import arrow from '../../assets/images/proximo (1).png'
import { 
    ButtonContainer, 
    ButtonImage, 
    ButtonShadow, 
    ButtonShadowRight, 
    Categoria,
    CategoriasContainer,
    CategoriasStyled,
} from './categoriasStyled';
import { useCategoryContext } from "../../context/categoryContext";
import { useCloseMenu } from "../../context/closeMenu";



function Categorias() {

    const categorias = [
        {name: 'Tudo', id: '0'},
        {name: 'Games', id: '20'},
        {name: 'Futebol', id: '17'},
        {name: 'Entretenimento', id: '24'},
        {name: 'Música', id: '10'},
        {name: 'Pessoas e blogs', id: '22'},
        {name: 'Automóveis e veículos', id: '2'},
        {name: 'Animais e pets', id: '15'},
        {name: 'Notícias e política', id: '25'},
        {name: 'Comédia', id: '23'},
        {name: 'Shorts', id: '26'},
        {name: 'Infantil', id: '1'},
        {name: 'Vida a dois', id: '22'},
        {name: 'Esportes', id: '17'},
        {name: 'Memes', id: '23'},
        {name: 'Jogos pc', id: '20'},
        {name: 'Jornais', id: '25'},
        {name: 'Kids', id: '1'},
        {name: 'Hits do momento', id: '10'},
        {name: 'História das civilizações', id: '22'},
        {name: 'Ciências', id: '15'},
        {name: 'Viagens pelo mundo', id: '24'},
        {name: 'Séries', id: '23'},
        {name: 'Novidades', id: '24'},
        {name: 'Educação', id: '1'}, 
        {name: 'Ciência e tecnologia', id: '2'}, 
        {name: 'Documentários', id: '26'}, 
        {name: 'Economia', id: '25'}, 
        {name: 'Investimentos e finanças', id: '20'}, 
        {name: 'Moda e estilo', id: '23'},
        {name: 'Comunicação', id: '10'},
        {name: 'Beleza', id: '24'},
      ];

    const {menu} = useContext(menuContext)

    const [firstClick, setFirstClick] = useState(false)
    const [firstClickR, setFirstClickRight] = useState(false)

    useEffect(()=> {

        function updateButtons() {
            const parentDiv = document.getElementById('container') as HTMLDivElement;
            const childDivFirst = document.getElementById('1') as HTMLDivElement;
            const childDivLast = document.getElementById('31') as HTMLDivElement;
            const leftbtn = document.getElementById('leftbtn') as HTMLButtonElement;
            const rightbtn = document.getElementById('rightbtn') as HTMLButtonElement;
            
            const childRectFirst = childDivFirst.getBoundingClientRect();
            const childRectLast = childDivLast.getBoundingClientRect();
            const parentRect = parentDiv.getBoundingClientRect();
    
            if (childRectFirst.left < parentRect.left) {
                leftbtn.style.visibility = 'visible';
            } else {
                leftbtn.style.visibility = 'hidden';
            }
    
            if (childRectLast.right < parentRect.right) {
                rightbtn.style.visibility = 'hidden';
            } else {
                rightbtn.style.visibility = 'visible';
            }
            
        }

        function firstClickLeft() {
            const leftbtn = document.getElementById('leftbtn') as HTMLButtonElement;
            setFirstClick(true)

            if (firstClick === true){
                leftbtn.style.visibility = 'visible';
            }
        }

        function firstClickRight() {
            const rightbtn = document.getElementById('rightbtn') as HTMLButtonElement;
            setFirstClickRight(true)

            if (firstClickR === true){
                rightbtn.style.visibility = 'visible';
            }
            
        }

        const rightbtn = document.getElementById('right-btn') as HTMLButtonElement;
        rightbtn.addEventListener('click', scrollRight);

        function scrollRight() {
            const categorias= document.getElementById('categorias') as HTMLDivElement;
            categorias.scrollBy({left: 200, behavior: "smooth"})
            updateButtons();
            firstClickLeft();
        }
            
        const leftbtn = document.getElementById('left-btn') as HTMLButtonElement;
        leftbtn.addEventListener('click', scrollLeft);

        function scrollLeft() {
            const categorias= document.getElementById('categorias') as HTMLDivElement;
            categorias.scrollBy({left: -200, behavior: "smooth"})
            updateButtons();
            firstClickRight();
        }
    }, [firstClick, firstClickR]);


    const {setCategoryId} = useCategoryContext();

    function ChangeCategory(id: string, index: number){
        setCategoryId(id);

        console.log(index)
        
        const categories = document.querySelectorAll('.on')
        console.log(categories)

        categories.forEach((item)=> {
            item.classList.remove('on')
        })

        const currentElement = document.getElementById(index.toString())
        if(currentElement){
            currentElement.classList.add('on');
        }

    }

    const {closeMenu} = useCloseMenu()


    return (
        <CategoriasContainer styles={menu} id="container" closeMenuWidth={closeMenu}>
            <ButtonShadow id="leftbtn">
                <ButtonContainer id="left-btn">
                    <ButtonImage alt="left button" src={arrow}/>
                </ButtonContainer>
            </ButtonShadow>
            <CategoriasStyled styles={menu} id="categorias">
                {categorias.map((item, index) => (
                    <Categoria onClick={()=> ChangeCategory(item.id, index)} id={index.toString()} className={index === 0? 'on': ''}>
                        <div style={{display:'flex', alignItems: 'center'}}>{item.name}</div>
                    </Categoria>   
                ))}
            </CategoriasStyled>
            <ButtonShadowRight id="rightbtn">
                <ButtonContainer id="right-btn">
                    <ButtonImage alt="right button" src={arrow}/>
                </ButtonContainer>
            </ButtonShadowRight>
        </CategoriasContainer>
    )
}

export default Categorias;