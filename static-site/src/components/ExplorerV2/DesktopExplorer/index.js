import { BuildingsExplorer } from 'components/ExplorerV2/BuildingsExplorer';
import * as S from 'components/ExplorerV2/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/ExplorerV2/MapExplorer';
import { Masthead } from 'components/ExplorerV2/Masthead';
import { SortBar } from 'components/ExplorerV2/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection
                css={`
                    width: 36vw;
                    min-width: 36vw;
                `}
            >
                <MapExplorer />
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection
                css={`
                    width: 64vw;
                    min-width: 64vw;
                    position: relative;
                    border-left: 1px solid
                        ${(props) => props.theme.colors.grey[0]};
                `}
            >
                {Boolean(highrises.length) && (
                    <>
                        <S.DesktopExplorerBuildings>
                            <BuildingsExplorer activeSort={activeSort} />
                            <SortBar
                                activeSort={activeSort}
                                setActiveSort={setActiveSort}
                            />
                        </S.DesktopExplorerBuildings>
                        <Masthead />
                    </>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};
