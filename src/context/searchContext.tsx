import { createContext, ReactNode, useContext, useState } from "react";

interface SearchProps {
    search: string
    setSearch: (search: string) => void
}

interface StorageProps {
    children: ReactNode;
}

export const SearchContext = createContext<SearchProps>({} as SearchProps);

export const SearchStorage: React.FC<StorageProps> = ( {children} ) => {
    const [search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    return useContext(SearchContext)
}