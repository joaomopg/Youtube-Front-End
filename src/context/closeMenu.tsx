import React, { createContext, useContext, useState } from "react";

interface ContextProps {
    closeMenu: boolean
    setCloseMenu: (closeMenu: boolean)=> void
}

interface StorageProps {
    children: React.ReactNode;
}

export const CloseMenuContext = createContext({} as ContextProps)

export const CloseMenuStorage: React.FC<StorageProps> = ({children}) => {

    const [closeMenu, setCloseMenu] = useState(false)

    return (
        <CloseMenuContext.Provider value={{closeMenu, setCloseMenu}}>
            {children}
        </CloseMenuContext.Provider>
    )
}
export function useCloseMenu(){
    return useContext(CloseMenuContext)
}