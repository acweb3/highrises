import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

export const ExplorerV2 = () => {
    const { explorerRef, buildingExplorerMobileRefState } =
        useExplorerRefContext();

    const height = buildingExplorerMobileRefState.current
        ? explorerRef.current?.children[0].offsetHeight * 2 +
          buildingExplorerMobileRefState.current.scrollWidth
        : 0;

    useEffect(() => {
        if (
            window.scrollY >= explorerRef.current?.getBoundingClientRect().top
        ) {
            explorerRef.current?.scrollIntoView(true);
        }
    }, [buildingExplorerMobileRefState]);

    return (
        <S.ExplorerV2
            ref={explorerRef}
            style={{
                height,
            }}
        >
            <DesktopExplorer />
        </S.ExplorerV2>
    );
};
