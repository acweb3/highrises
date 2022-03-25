import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { SortBar } from 'components/Explorer/SortBar';
import { useState } from 'react';

export const Explorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);

    return (
        <S.Explorer>
            <S.ExplorerSection>
                <MapExplorer />
            </S.ExplorerSection>
            <S.ExplorerSection right>
                <SortBar
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
                <BuildingsExplorer activeSort={activeSort} />
                <Masthead />
            </S.ExplorerSection>
        </S.Explorer>
    );
};
