import { highrises as highrisesData } from 'assets/data/highrises';
import { pullImage } from 'common/images';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

const ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY = 'ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY';

export const ActiveHighrise = ({ children }) => {
    const [activeHighrise, setActiveHighrise] = useState(undefined);
    const [highrises, setHighrises] = useState([]);
    const [initHighrisesState, setInitHighrisesState] = useState([]);
    const initHighrises = useRef();

    useEffect(() => {
        if (activeHighrise) {
            localStorage.setItem(
                ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY,
                activeHighrise.index
            );
        }
    }, [activeHighrise]);

    useEffect(() => {
        (async () => {
            const highriseWithImage = await Promise.all(
                // # TODO => Remove this slice
                highrisesData.slice(0, 20).map(async (highrise, index) => {
                    return {
                        ...highrise,
                        iconSrc: await pullImage('icon', index, 'jpg'),
                        imageSrc: await pullImage('slide', index),
                        posterSrc: await pullImage('poster', index, 'jpg'),
                        nftSrc: await pullImage('nft', index, 'jpg'),
                        mapSrc: await pullImage('map', index, 'jpg'),
                        index,
                    };
                })
            );

            const localStorageHighriseIndex = localStorage.getItem(
                ACTIVE_HIGHRISE_LOCAL_STORAGE_KEY
            );
            const activeHighriseIndex =
                localStorageHighriseIndex &&
                !isNaN(parseInt(localStorageHighriseIndex)) &&
                highriseWithImage[localStorageHighriseIndex]
                    ? parseInt(localStorageHighriseIndex)
                    : 0;

            setActiveHighrise(highriseWithImage[activeHighriseIndex]);
            setHighrises(highriseWithImage);
            setInitHighrisesState(highriseWithImage);
            initHighrises.current = highriseWithImage;
        })();
    }, [setHighrises, setActiveHighrise]);

    return (
        <ActiveHighriseContext.Provider
            value={{
                activeHighrise,
                setActiveHighrise,
                highrises,
                setHighrises,
                initHighrises,
                initHighrisesState,
            }}
        >
            {children}
        </ActiveHighriseContext.Provider>
    );
};
