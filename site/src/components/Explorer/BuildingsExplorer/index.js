import { highrises as highrisesData } from 'assets/data/highrises';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

const pullImage = async (type, index, ext = 'png') =>
    (await import(`assets/images/${type}-highrises/${index}.${ext}`)).default;

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();
    const initHighrises = useRef();
    const { buildingExplorerRef } = useExplorerRefContext();

    const scrollBuildings = (e, isRight) => {
        e.preventDefault();
        e.stopPropagation();

        if (buildingExplorerRef.current) {
            buildingExplorerRef.current.scrollTo(
                buildingExplorerRef.current.scrollLeft +
                    700 * (isRight ? 1 : -1),
                0
            );
        }
    };

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

    useEffect(() => {
        setActiveHighrise(undefined);

        if (activeSort) {
            const sortedHighrises = activeSort.sort([...initHighrises.current]);
            setHighrises(sortedHighrises);
            setActiveHighrise(sortedHighrises[0]);
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
        }
    }, [activeSort, setActiveHighrise, setHighrises, buildingExplorerRef]);

    return (
        <S.BuildingsExplorer>
            <S.BuildingsExplorerArrow
                left
                onClick={(e) => scrollBuildings(e, false)}
            >
                <S.BuildingsExplorerScrollLeft />
            </S.BuildingsExplorerArrow>
            <S.BuildingsScroll ref={buildingExplorerRef}>
                {highrises.map((building, index) => (
                    <Building key={index} building={building} />
                ))}
            </S.BuildingsScroll>
            <S.BuildingsExplorerArrow
                right
                onClick={(e) => scrollBuildings(e, true)}
            >
                <S.BuildingsExplorerScrollRight />
            </S.BuildingsExplorerArrow>
        </S.BuildingsExplorer>
    );
};
