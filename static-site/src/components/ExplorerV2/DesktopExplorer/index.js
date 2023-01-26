import { Masthead } from '../Masthead';
import { BuildingsExplorer } from 'components/ExplorerV2/BuildingsExplorer';
import * as S from 'components/ExplorerV2/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/ExplorerV2/MapExplorer';
import { SortBar } from 'components/ExplorerV2/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <S.DesktopExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection></S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                {Boolean(highrises.length) && (
                    <S.DesktopExplorerBuildings>
                        <BuildingsExplorer activeSort={activeSort} />
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                    </S.DesktopExplorerBuildings>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};
