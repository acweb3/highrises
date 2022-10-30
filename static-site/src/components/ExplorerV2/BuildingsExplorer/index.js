import { getBuildingURL } from 'common/helpers';
import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/ExplorerV2/BuildingsExplorer/BuildingsExplorer.styled';
import { DragScroll } from 'components/ExplorerV2/BuildingsExplorer/DragScroll';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect } from 'react';

export const BuildingsExplorer = ({ activeSort, isMobile }) => {
    const { highrises, initHighrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();

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
            {isMobile ? (
                <div
                    css={`
                        display: flex;
                        overflow-x: scroll;

                        ::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                >
                    {highrises.map((building) => (
                        <Building
                            key={getBuildingURL(building)}
                            building={building}
                        />
                    ))}
                </div>
            ) : (
                <DragScroll>
                    {highrises.map((building, index) => (
                        <Building
                            key={getBuildingURL(building)}
                            building={building}
                        />
                    ))}
                </DragScroll>
            )}
        </S.BuildingsExplorer>
    );
};
