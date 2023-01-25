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
            <S.DesktopExplorerSection
                css={`
                    width: 27vw;
                    min-width: 27vw;
                `}
            >
                <S.DesktopExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection
                css={`
                    width: 38vw;
                    min-width: 38vw;
                    background: ${(props) => props.theme.colors.grey[1]};
                `}
            ></S.DesktopExplorerSection>

            <S.DesktopExplorerSection
                css={`
                    width: 35vw;
                    min-width: 35vw;
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
