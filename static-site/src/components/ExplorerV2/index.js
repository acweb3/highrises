import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { MobileExplorer } from 'components/ExplorerV2/MobileExplorer';
import { GatsbyLink } from 'components/ui/BaseLink/BaseLink.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

export const ExplorerV2 = () => {
    const { isLoaded, isSmallish } = useWindowSize();
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
            !isSmallish
        ) {
            explorerRef.current?.scrollIntoView(true);
        }
    }, [buildingExplorerMobileRefState, isLoaded, isSmallish]);

    return (
        <S.ExplorerV2
            ref={explorerRef}
            css={`
                opacity: ${isLoaded ? 1 : 0};
                transition: opacity 400ms;
            `}
            style={{
                height: isLoaded && !isSmallish ? height : undefined,
            }}
        >
            {isSmallish ? <MobileExplorer /> : <DesktopExplorer />}
        </S.ExplorerV2>
    );
};
