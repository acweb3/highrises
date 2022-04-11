import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import * as S from 'components/Explorer/MobileExplorer/MobileExplorer.styled';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useState } from 'react';

export const MobileExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { activeHighrise } = useActiveHighriseContext();
    const { buildingExplorerMobileRef } = useExplorerRefContext();

    return (
        <S.MobileExplorer>
            <MobileMap />
            <SortBar activeSort={activeSort} setActiveSort={setActiveSort} />
            <BuildingsExplorer
                activeSort={activeSort}
                buildingExplorerRef={buildingExplorerMobileRef}
            />
            <S.MobileExplorerSection isVisible>
                <Masthead />
                {activeHighrise && (
                    <S.MobileExplorerNavigation
                        showMap
                        activeHighrise={activeHighrise}
                    />
                )}
            </S.MobileExplorerSection>
        </S.MobileExplorer>
    );
};
