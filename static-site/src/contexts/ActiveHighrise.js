import { featureCity, featureStyle } from 'assets/data/features';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const features = { ...featureCity, ...featureStyle };

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

export const ActiveHighrise = ({ children, initHighrise, highrises: init }) => {
    const { activeSort } = useActiveSortContext();
    const [highrises, setHighrises] = useState(init);
    const [activeHighrise, setActiveHighrise] = useState(
        initHighrise ?? init[0]
    );
    const [randomHighrise, setRandomHighrise] = useState(
        init[Math.floor(Math.random() * highrises.length)]
    );
    const hasInteracted = useHasInteracted(activeHighrise);
    const initHighrises = useRef(init);
    const [activeDescription, setActiveDescription] = useState(undefined);

    useEffect(() => {
        if (activeHighrise) {
            setActiveDescription(undefined);
        }
    }, [activeHighrise]);

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

    useEffect(() => {
        if (activeSort) {
            const sortedHighrises = activeSort.sort([...initHighrises.current]);
            setHighrises(sortedHighrises);

            const copy = features[activeSort.sortValue.toUpperCase()];

            if (copy) {
                setActiveDescription({
                    header: activeSort.sortValue,
                    copy,
                });
                setActiveHighrise(undefined);
            } else {
                setActiveDescription(undefined);
                setActiveHighrise(sortedHighrises[0]);
            }
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
            setActiveHighrise(undefined);
            setActiveDescription({
                header: 'About',
                copy: `The prosperity of early 20th century America resulted in a boom of skyscrapers that still tower over cities across the country today. Focusing on the character and craftsmanship on display at the top of these landmark buildings in a way that can’t be seen from street level, the Highrises Collection reveals fascinating details and stories of these distinctly American icons.`,
            });
        }
    }, [activeSort, setActiveHighrise, setHighrises, initHighrises]);

    return (
        <ActiveHighriseContext.Provider
            value={{
                activeDescription,
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
