import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { DragScroll } from 'components/Explorer/BuildingsExplorer/DragScroll';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect } from 'react';

export const BuildingsExplorer = ({ activeSort, buildingExplorerRef }) => {
    const { highrises, initHighrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();

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
        if (activeSort) {
            const sortedHighrises = activeSort.sort([...initHighrises.current]);
            setHighrises(sortedHighrises);

            setActiveHighrise(sortedHighrises[0]);
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
            setActiveHighrise(initHighrises.current[0]);
        }
    }, [
        activeSort,
        setActiveHighrise,
        setHighrises,
        buildingExplorerRef,
        initHighrises,
    ]);

    return (
        <S.BuildingsExplorer>
            <S.BuildingsExplorerArrow
                left
                onClick={(e) => scrollBuildings(e, false)}
            >
                <S.BuildingsExplorerScrollLeft />
            </S.BuildingsExplorerArrow>

            {buildingExplorerRef ? (
                <DragScroll buildingExplorerRef={buildingExplorerRef}>
                    {highrises.map((building, index) => (
                        <Building key={building.name} building={building} />
                    ))}
                </DragScroll>
            ) : (
                <S.BuildingsScroll ref={buildingExplorerRef}>
                    {highrises.map((building, index) => (
                        <Building key={index} building={building} />
                    ))}
                </S.BuildingsScroll>
            )}

            <S.BuildingsExplorerArrow
                right
                onClick={(e) => scrollBuildings(e, true)}
            >
                <S.BuildingsExplorerScrollRight />
            </S.BuildingsExplorerArrow>
        </S.BuildingsExplorer>
    );
};
