import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/ExplorerV2/BuildingsExplorer/BuildingsExplorer.styled';
import { DragScroll } from 'components/ExplorerV2/BuildingsExplorer/DragScroll';
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

            setActiveHighrise(undefined);
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
            setActiveHighrise(undefined);
        }
    }, [
        activeSort,
        setActiveHighrise,
        setHighrises,
        buildingExplorerRef,
        initHighrises,
    ]);

    return (
        <>
            {buildingExplorerRef ? (
                <S.BuildingsExplorer>
                    <S.BuildingsExplorerArrow
                        left
                        onClick={(e) => scrollBuildings(e, false)}
                    >
                        <S.BuildingsExplorerScrollLeft />
                    </S.BuildingsExplorerArrow>
                    <DragScroll buildingExplorerRef={buildingExplorerRef}>
                        {highrises.map((building, index) => (
                            <Building key={building.name} building={building} />
                        ))}
                    </DragScroll>

                    <S.BuildingsExplorerArrow
                        right
                        onClick={(e) => scrollBuildings(e, true)}
                    >
                        <S.BuildingsExplorerScrollRight />
                    </S.BuildingsExplorerArrow>
                </S.BuildingsExplorer>
            ) : (
                <>
                    <S.BuildingsScroll>
                        {highrises.map((building, index) => (
                            <Building key={index} building={building} />
                        ))}
                    </S.BuildingsScroll>
                    <S.BuildingsScrollInfo>
                        Scroll to see more highrises →
                    </S.BuildingsScrollInfo>
                </>
            )}
        </>
    );
};
