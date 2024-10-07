import React, { useEffect, useState } from "react";
import { createContext } from "react";

interface CategoryContextData {
    menu: boolean;
    setMenu: (menu: boolean) => void;
}

interface CategoryContextProps {
    children: React.ReactNode
}

export const menuContext = createContext<CategoryContextData>({} as CategoryContextData);

export const MenuStore: React.FC<CategoryContextProps> = ( {children} ) => {

    const [menu, setMenu] = useState(true);

    return (
        <menuContext.Provider value={{menu, setMenu}}>
            { children }
        </menuContext.Provider>
    )
}

