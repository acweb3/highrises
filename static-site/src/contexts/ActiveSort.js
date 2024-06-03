import { SORTS } from 'components/Explorer/SortBar';
import kebabCase from 'just-kebab-case';
import { createContext, useContext, useState } from 'react';

export const ActiveSortContext = createContext({});
export const useActiveSortContext = () => useContext(ActiveSortContext);

// # TODO => this is probably busted for mobile
const getInitialActiveSort = (sortName) => {
    if (!sortName) {
        return undefined;
    }

    const [sortKey, activeSort] = Object.entries(SORTS).find(([key, value]) => {
        const keys = Object.entries(value.options()).find(
            ([option]) => kebabCase(option) === kebabCase(sortName)
        );
        return keys;
    });

    if (!sortKey) {
        return undefined;
    }

    const [activeOption] = Object.values(activeSort.options()).filter(
        (option) => kebabCase(option.value) === kebabCase(sortName)
    );

    if (!activeOption) {
        return undefined;
    }

    return {
        sortKey,
        sort: activeOption.sort,
        sortName: activeSort.name,
        sortValue: activeOption.value,
    };
};

export const ActiveSort = ({ children, sortName }) => {
    const [activeSort, setActiveSort] = useState(
        getInitialActiveSort(sortName)
    );

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
