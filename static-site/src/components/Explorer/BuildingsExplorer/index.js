import { getBuildingURL } from 'common/helpers';
import { useDelayed } from 'common/hooks/useDelayed';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, setActiveHighrise, setHighrises, initHighrises } =
        useActiveHighriseContext();

    const [didMouseEnter, setDidMouseEnter] = useState(false);
    const delayedDidMouseEnter = useDelayed(didMouseEnter, 400);

    const [visibleIndex, setVisibleIndex] = useState(5);
    const onInView = (index) => {
        setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
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
    }, [activeSort, setActiveHighrise, setHighrises, initHighrises]);

    return (
        <S.BuildingsExplorer>
            {highrises.map((building) => (
                <Building
                    key={getBuildingURL(building)}
                    building={building}
                    isVisible={building.index <= visibleIndex}
                    onInView={onInView}
                />
            ))}

            {!delayedDidMouseEnter && (
                <S.BuildingsExplorerOnboarding
                    isActive={!didMouseEnter}
                    onMouseEnter={() => setDidMouseEnter(true)}
                >
                    <S.BuildingsExplorerHeader>
                        Select a Highrise
                    </S.BuildingsExplorerHeader>
                    <div>Use filters to narrow your search</div>
                </S.BuildingsExplorerOnboarding>
            )}
        </S.BuildingsExplorer>
    );
};
