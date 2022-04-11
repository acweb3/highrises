import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useState } from 'react';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { buildingExplorerDesktopRef } = useExplorerRefContext();
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <MapExplorer />
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection right>
                {Boolean(highrises.length) && (
                    <>
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                        <BuildingsExplorer
                            activeSort={activeSort}
                            buildingExplorerRef={buildingExplorerDesktopRef}
                        />
                        <Masthead />
                    </>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};
