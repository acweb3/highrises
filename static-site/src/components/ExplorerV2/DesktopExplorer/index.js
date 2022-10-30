import { useDocumentListener } from 'common/hooks/useDocumentListener';
import { BuildingsExplorer } from 'components/ExplorerV2/BuildingsExplorer';
import * as S from 'components/ExplorerV2/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/ExplorerV2/MapExplorer';
import { Masthead } from 'components/ExplorerV2/Masthead';
import { SortBar } from 'components/ExplorerV2/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useState } from 'react';
import { useThrottle } from 'react-use';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { buildingExplorerDesktopRef } = useExplorerRefContext();
    const { highrises } = useActiveHighriseContext();

    const [scroll, setScroll] = useState(0);
    const throttledScroll = useThrottle(scroll, 100);

    useDocumentListener(
        'scroll',
        () => {
            const body = document.body;
            const html = document.documentElement;

            const documentHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );

            setScroll(
                Math.max(Math.min(window.scrollY / documentHeight, 1), 0)
            );
        },
        []
    );

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
                <S.DesktopExplorerBackground
                    style={{
                        transform: `translate3D(${
                            -42 * throttledScroll
                        }%, 0, 0)`,
                    }}
                />
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
