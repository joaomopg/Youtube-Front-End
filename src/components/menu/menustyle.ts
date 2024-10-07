import styled from "styled-components";

interface MenuProps {
    width: boolean
    queryMenu?: boolean
    closeMenu?: boolean
}

export const Container = styled.div<MenuProps>`
    width: ${({width, queryMenu}) => (queryMenu ? '250px' : width ? '250px' : '100px')};
    height: ${({queryMenu})=> queryMenu? '94vh' : '93vh'};
    box-sizing: border-box;
    margin-top: ${({queryMenu})=> queryMenu? '0px' : '60px'};
    padding: 0px 10px 10px 10px;
    display: ${({closeMenu, queryMenu})=> (queryMenu? 'flex' : closeMenu? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    position: fixed;
    overflow-y: hidden;
    background-color: white;
    z-index: 3;

    &:hover{
        overflow-y: auto;
    }
`
interface ItemProps {
    model: boolean
    queryMenu?: boolean
}

export const MenuItem = styled.div<ItemProps>`
    width: 90%;
    padding: 10px 0px;
    box-sizing: border-box;
    min-height: ${({model, queryMenu})=> (queryMenu? '40px': model? "40px": "70px")};
    border-radius: 10px;
    display: flex;
    flex-direction: ${({model, queryMenu})=> queryMenu? "row": model? "row": "column"};
    align-items: center;
    font-size: ${({model, queryMenu})=>(queryMenu? "16px": model? "16px": "12px")};
    text-align: center;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
`
interface DividerProps {
    styles: boolean
    queryMenu: boolean
}
export const Divider = styled.div<DividerProps>`
    width: ${({styles, queryMenu})=> (queryMenu? "220px": styles? "220px": "80px")};
    min-height: 1px;
    background-color: #d3d3d3;
    margin: 8px 0px;
`