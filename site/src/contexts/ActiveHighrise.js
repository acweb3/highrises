import { highrises as highrisesData } from 'assets/data/highrises';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const pullImage = async (type, index, ext = 'png') =>
    (await import(`assets/images/${type}-highrises/${index}.${ext}`)).default;

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);

export const ActiveHighrise = ({ children }) => {
    const [activeHighrise, setActiveHighrise] = useState(undefined);
    const [highrises, setHighrises] = useState([]);
    const [isExpandedView, setIsExpandedView] = useState(false);
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
                isExpandedView,
                setIsExpandedView,
                initHighrises,
            }}
        >
            {children}
        </ActiveHighriseContext.Provider>
    );
};
