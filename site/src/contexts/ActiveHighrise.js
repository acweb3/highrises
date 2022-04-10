import { highrises as highrisesData } from 'assets/data/highrises';
import { pullImage } from 'common/images';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

export const ActiveHighrise = ({ children }) => {
    const [activeHighrise, setActiveHighrise] = useState(undefined);
    const [highrises, setHighrises] = useState([]);
    const initHighrises = useRef();

    useEffect(() => {
        (async () => {
            const highriseWithImage = await Promise.all(
                // # TODO => Remove this slice
                highrisesData.slice(0, 15).map(async (highrise, index) => {
                    return {
                        ...highrise,
                        imageSrc: await pullImage('slide', index),
                        posterSrc: await pullImage('poster', index, 'jpg'),
                        thumbnailSrc: await pullImage('map', index),
                        nftSrc: await pullImage('nft', index, 'jpg'),
                        index,
                    };
                })
            );

            setActiveHighrise(highriseWithImage[0]);
            setHighrises(highriseWithImage);
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
            }}
        >
            {children}
        </ActiveHighriseContext.Provider>
    );
};
