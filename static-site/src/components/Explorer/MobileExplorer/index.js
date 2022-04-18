import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import * as S from 'components/Explorer/MobileExplorer/MobileExplorer.styled';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { SortBar } from 'components/Explorer/SortBar';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useState } from 'react';

export const MobileExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { buildingExplorerMobileRef } = useExplorerRefContext();

    return (
        <S.MobileExplorer>
            <MobileMap />
            <SortBar activeSort={activeSort} setActiveSort={setActiveSort} />
            <BuildingsExplorer activeSort={activeSort} />
            <S.MobileExplorerSection isVisible>
                <Masthead />
            </S.MobileExplorerSection>
        </S.MobileExplorer>
    );
};
