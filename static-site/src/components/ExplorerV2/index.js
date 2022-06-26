import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { MobileExplorer } from 'components/ExplorerV2/MobileExplorer';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

export const ExplorerV2 = () => {
    const { isLoaded, isMobile } = useWindowSize();
    const { explorerRef, buildingExplorerMobileRefState } =
        useExplorerRefContext();

    const height = buildingExplorerMobileRefState.current
        ? explorerRef.current?.children[0].offsetHeight * 2 +
          buildingExplorerMobileRefState.current.scrollWidth
        : 0;

    useEffect(() => {
        if (
            window.scrollY >=
                explorerRef.current?.getBoundingClientRect().top &&
            isLoaded &&
            !isMobile
        ) {
            explorerRef.current?.scrollIntoView(true);
        }
    }, [buildingExplorerMobileRefState, isLoaded, isMobile]);

    return (
        <S.ExplorerV2
            ref={explorerRef}
            style={{
                height: isLoaded && !isMobile ? height : undefined,
            }}
        >
            {isLoaded && isMobile ? <MobileExplorer /> : <DesktopExplorer />}
        </S.ExplorerV2>
    );
};
