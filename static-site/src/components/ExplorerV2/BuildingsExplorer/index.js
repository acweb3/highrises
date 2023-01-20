import { getBuildingURL } from 'common/helpers';
import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/ExplorerV2/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, initHighrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();
    const [visibleIndex, setVisibleIndex] = useState(5);

    const onInView = (index) => {
        setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
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
            <div
                css={`
                    display: flex;
                    overflow-x: scroll;

                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}
            >
                {highrises.map((building, index) => (
                    <Building
                        key={getBuildingURL(building)}
                        building={building}
                        isVisible={index <= visibleIndex}
                        onInView={onInView}
                    />
                ))}
            </div>
        </S.BuildingsExplorer>
    );
};
