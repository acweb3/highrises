import { featureCity, featureStyle } from 'assets/data/features';
import { getBuildingURL } from 'common/helpers';
import { breakpointsMap } from 'common/styles/theme/breakpoints';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { getWindowDimensions, getWindowSize } from 'contexts/WindowSize';
import kebabCase from 'just-kebab-case';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

const features = { ...featureCity, ...featureStyle };

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

const useHasInteracted = (activeHighrise, skip) => {
    const isInitRef = useRef(skip ?? false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (isInitRef.current === true) {
            setHasInteracted(true);
        }

        isInitRef.current = true;
    }, [activeHighrise]);

    return hasInteracted;
};

export const ActiveHighrise = ({
    children,
    initHighrise,
    initDescription,
    highrises: init,
}) => {
    const { activeSort, setActiveSort } = useActiveSortContext();
    const [highrises, setHighrises] = useState(init);
    const [activeHighrise, setActiveHighrise] = useState(
        initHighrise ?? init[0]
    );
    const didInitRef = useRef(false);
    const [randomHighrise, setRandomHighrise] = useState(
        init[Math.floor(Math.random() * highrises.length)]
    );
    const hasInteracted = useHasInteracted(
        activeHighrise,
        Boolean(initHighrise)
    );

    const initHighrises = useRef(init);
    const [activeDescription, setActiveDescription] = useState(initDescription);
    const [isAboutOverride, setIsAboutOverride] = useState(false);

    const updateHighrise = useCallback((highrise, withReplace = true) => {
        if (withReplace) {
            if (highrise) {
                window.history.replaceState(
                    null,
                    '',
                    `${getBuildingURL(highrise)}/`
                );
            } else {
                window.history.replaceState(null, '', '/');
            }
        }

        setActiveHighrise(highrise);
    }, []);

    const updateDescription = useCallback((description, withReplace = true) => {
        if (withReplace) {
            if (description && description.header !== 'About') {
                window.history.replaceState(
                    null,
                    '',
                    `/${kebabCase(description.header)}/`
                );
            } else {
                window.history.replaceState(null, '', '/');
            }
        }

        setActiveDescription(description);
    }, []);

    const reset = useCallback(() => {
        setHighrises(initHighrises.current);
        updateHighrise(undefined, false);
        updateDescription({
            header: 'About',
        });
        setActiveSort(undefined);
    }, [updateHighrise, updateDescription, setActiveSort]);

    useEffect(() => {
        if (activeHighrise) {
            updateDescription(undefined, false);
        }
    }, [activeHighrise, updateDescription]);

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

            // # TODO => FIXME bad, bad, bad.  Super sketchy!
            if (
                getWindowSize(getWindowDimensions().width) <=
                breakpointsMap.small
            ) {
                return;
            }

            if (copy) {
                updateDescription({
                    header: activeSort.sortValue,
                    copy,
                });
                updateHighrise(undefined, false);
            } else {
                updateDescription(undefined, false);
                updateHighrise(sortedHighrises[0]);
            }
        } else if (initHighrise && !didInitRef.current) {
            didInitRef.current = true;

            setHighrises(initHighrises.current);
            updateHighrise(initHighrise);
            updateDescription(undefined, false);
        } else if (initHighrises.current) {
            reset();
        }
    }, [
        activeSort,
        updateHighrise,
        setHighrises,
        initHighrises,
        initHighrise,
        updateDescription,
        reset,
    ]);

    return (
        <ActiveHighriseContext.Provider
            value={{
                activeDescription,
                hasInteracted,
                randomHighrise,
                activeHighrise,
                setActiveHighrise: updateHighrise,
                highrises,
                setHighrises,
                initHighrises,
                initHighrisesState: init,
                reset,
                isAboutOverride,
                setIsAboutOverride,
            }}
        >
            {children}
        </ActiveHighriseContext.Provider>
    );
};
