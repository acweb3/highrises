import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

const ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY = 'ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY';

export const ActiveHighrise = ({ children, highrises: init }) => {
    const [highrises, setHighrises] = useState(init);
    const [activeHighrise, setActiveHighrise] = useState(init[0]);

    const initHighrises = useRef(init);

    useEffect(() => {
        if (activeHighrise) {
            localStorage.setItem(
                ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY,
                activeHighrise.index
            );
        }
    }, [activeHighrise]);

    return (
        <ActiveHighriseContext.Provider
            value={{
                activeHighrise,
                setActiveHighrise,
                highrises,
                setHighrises,
                initHighrises,
                initHighrisesState: init,
            }}
        >
            {children}
        </ActiveHighriseContext.Provider>
    );
};
