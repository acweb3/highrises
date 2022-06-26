import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/ExplorerV2/BuildingsExplorer/BuildingsExplorer.styled';
import { DragScroll } from 'components/ExplorerV2/BuildingsExplorer/DragScroll';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect } from 'react';

export const BuildingsExplorer = ({ activeSort, isMobile }) => {
    const { highrises, initHighrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();
    const { buildingExplorerMobileRefState } = useExplorerRefContext();

    const scrollBuildings = (e, isRight) => {
        e.preventDefault();
        e.stopPropagation();

        if (buildingExplorerMobileRefState.current) {
            buildingExplorerMobileRefState.current.scrollTo(
                buildingExplorerMobileRefState.current.scrollLeft +
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
    }, [activeSort, setActiveHighrise, setHighrises, initHighrises]);

    return (
        <S.BuildingsExplorer>
            <S.BuildingsExplorerArrow
                left
                onClick={(e) => scrollBuildings(e, false)}
            >
                <S.BuildingsExplorerScrollLeft />
            </S.BuildingsExplorerArrow>
            {isMobile ? (
                <div
                    css={`
                        display: flex;
                        overflow-x: scroll;
                    `}
                >
                    {highrises.map((building, index) => (
                        <Building key={building.name} building={building} />
                    ))}
                </div>
            ) : (
                <DragScroll>
                    {highrises.map((building, index) => (
                        <Building key={building.name} building={building} />
                    ))}
                </DragScroll>
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
