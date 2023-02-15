import { getBuildingURL } from 'common/helpers';
import { useDelayed } from 'common/hooks/useDelayed';
import { useWindowSize } from 'common/hooks/useWindowSize';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const BuildingsExplorer = () => {
    const { highrises } = useActiveHighriseContext();

    const { isMobile } = useWindowSize();
    const [didMouseEnter, setDidMouseEnter] = useState(false);
    const delayedDidMouseEnter = useDelayed(didMouseEnter, 400);

    const [visibleIndex, setVisibleIndex] = useState(5);
    const onInView = (index) => {
        setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
    };

    return (
        <S.BuildingsExplorer>
            <S.BuildingsExplorerGrid count={highrises.length}>
                {highrises.map((building) => (
                    <Building
                        key={getBuildingURL(building)}
                        building={building}
                        isVisible={building.index <= visibleIndex}
                        onInView={onInView}
                    />
                ))}
            </S.BuildingsExplorerGrid>

            {!delayedDidMouseEnter && !isMobile && (
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
