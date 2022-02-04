import { createContext, useContext, useState } from 'react';

export const SortContext = createContext({});
export const useSortContext = () => useContext(SortContext);

export const Sort = ({ children }) => {
    const [sort, setSort] = useState();

    return (
        <SortContext.Provider value={{ sort, setSort }}>
            {children}
        </SortContext.Provider>
    );
};
