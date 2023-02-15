import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

const useHasInteracted = (activeHighrise) => {
    const isInitRef = useRef(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (isInitRef.current === true) {
            setHasInteracted(true);
        }

        isInitRef.current = true;
    }, [activeHighrise]);

    return hasInteracted;
};

export const ActiveHighrise = ({ children, highrises: init }) => {
    const [highrises, setHighrises] = useState(init);
    const [activeHighrise, setActiveHighrise] = useState(init[0]);
    const [randomHighrise, setRandomHighrise] = useState(
        init[Math.floor(Math.random() * highrises.length)]
    );
    const hasInteracted = useHasInteracted(activeHighrise);
    const initHighrises = useRef(init);

    useEffect(() => {
        setRandomHighrise(
            highrises[Math.floor(Math.random() * highrises.length)]
        );

        const sti = setInterval(() => {
            setRandomHighrise(
                highrises[Math.floor(Math.random() * highrises.length)]
            );
        }, 4000);

        return () => {
            clearInterval(sti);
        };
    }, [highrises]);

    return (
        <ActiveHighriseContext.Provider
            value={{
                hasInteracted,
                randomHighrise,
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
