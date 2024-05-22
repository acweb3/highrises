import { getBuildingURL } from 'common/helpers';
import { useDelayed } from 'common/hooks/useDelayed';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useState } from 'react';

export const BuildingsExplorer = ({ buildingExplorerHeight }) => {
    const { highrises } = useActiveHighriseContext();

    const { isTablet } = useWindowSizeContext();
    const [didMouseEnter, setDidMouseEnter] = useState(false);
    const delayedDidMouseEnter = useDelayed(didMouseEnter, 400);

    const [visibleIndex, setVisibleIndex] = useState(5);
    const onInView = (index) => {
        setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
    };

    return (
        <S.BuildingsExplorer buildingExplorerHeight={buildingExplorerHeight}>
            <a
                href="https://www.hythacg.com/highrises-shop"
                target="_blank"
                rel="noopener noreferrer"
            >
                <S.BuildingsExplorerShop>Store</S.BuildingsExplorerShop>
            </a>

            <S.BuildingsExplorerGrid
                buildingExplorerHeight={buildingExplorerHeight}
                count={highrises.length}
            >
                {highrises.map((building) => (
                    <Building
                        key={getBuildingURL(building)}
                        building={building}
                        isVisible={building.index <= visibleIndex}
                        onInView={onInView}
                    />
                ))}
            </S.BuildingsExplorerGrid>

            {!delayedDidMouseEnter && !isTablet && (
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
