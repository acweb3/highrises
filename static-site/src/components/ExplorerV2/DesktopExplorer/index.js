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
                    overflow: hidden;
                    width: 64vw;
                    min-width: 64vw;
                    position: relative;
                    border-left: 1px solid
                        ${(props) => props.theme.colors.grey[0]};
                `}
            >
                <S.DesktopExplorerBackground />
                {Boolean(highrises.length) && (
                    <>
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                        <BuildingsExplorer activeSort={activeSort} />
                        <Masthead />
                    </>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};
