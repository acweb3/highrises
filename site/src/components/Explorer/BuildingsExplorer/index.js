import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, initHighrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();
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
