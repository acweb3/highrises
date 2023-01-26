import { BuildingsExplorer } from './BuildingsExplorer';
import { MapExplorer } from './MapExplorer';
import { Masthead } from './Masthead';
import { SortBar } from './SortBar';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const ExplorerV2 = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { highrises } = useActiveHighriseContext();

    return (
        <S.ExplorerV2>
            <S.ExplorerSection>
                <S.ExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.ExplorerSideBar>
            </S.ExplorerSection>

            <S.ExplorerSection></S.ExplorerSection>

            <S.ExplorerSection>
                {Boolean(highrises.length) && (
                    <S.ExplorerBuildings>
                        <BuildingsExplorer activeSort={activeSort} />
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                    </S.ExplorerBuildings>
                )}
            </S.ExplorerSection>
        </S.ExplorerV2>
    );
};
