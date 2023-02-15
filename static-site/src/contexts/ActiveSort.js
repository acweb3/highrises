import { createContext, useContext, useState } from 'react';

export const ActiveSortContext = createContext({});
export const useActiveSortContext = () => useContext(ActiveSortContext);

export const ActiveSort = ({ children }) => {
    const [activeSort, setActiveSort] = useState(undefined);

    return (
        <ActiveSortContext.Provider
            value={{
                activeSort,
                setActiveSort,
            }}
        >
            {children}
        </ActiveSortContext.Provider>
    );
};
