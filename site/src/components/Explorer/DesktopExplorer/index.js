import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { SortBar } from 'components/Explorer/SortBar';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useState } from 'react';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { buildingExplorerRef } = useExplorerRefContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <MapExplorer />
            </S.DesktopExplorerSection>
            <S.DesktopExplorerSection right>
                <SortBar
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
                <BuildingsExplorer
                    activeSort={activeSort}
                    buildingExplorerRef={buildingExplorerRef}
                />
                <Masthead />
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};
