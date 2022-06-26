import { useDocumentListener } from 'common/hooks/useDocumentListener';
import * as S from 'components/ExplorerV2/BuildingsExplorer/DragScroll/DragScroll.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef, useState } from 'react';
import { useThrottle } from 'react-use';

export const DragScroll = ({ children }) => {
    const contentRef = useRef(null);
    const hasSetRef = useRef(false);
    const { desktopNavRef, setBuildingExplorerMobileRefState } =
        useExplorerRefContext();
    const { activeHighrise, highrises } = useActiveHighriseContext();
    const [scroll, setScroll] = useState(0);
    const throttledScroll = useThrottle(scroll, 100);

    useDocumentListener(
        'scroll',
        () => {
            const offset =
                window.scrollY - contentRef.current?.offsetHeight ?? 0;

            setScroll(
                Math.max(
                    Math.min(
                        offset,
                        contentRef.current.scrollWidth -
                            contentRef.current.offsetWidth
                    ),
                    0
                )
            );
        },
        []
    );

    useEffect(() => {
        if (activeHighrise) {
            const index = highrises.findIndex(
                (highrise) => highrise.index === activeHighrise.index
            );
            window.scrollTo(
                0,
                Math.max(
                    Math.min(
                        (index + 1) * Math.max(window.innerWidth / 4, 400) +
                            desktopNavRef.current.offsetHeight +
                            64
                    ),
                    0
                )
            );
        }
    }, [activeHighrise, highrises]);

    useEffect(() => {
        setScroll(0);
        setBuildingExplorerMobileRefState((buildingExplorerMobileRefState) => ({
            ...buildingExplorerMobileRefState,
            reset: !buildingExplorerMobileRefState.reset,
        }));
    }, [highrises]);

    return (
        <S.DragScroll>
            <S.DragScrollContent
                style={{
                    transform: `translate3D(-${throttledScroll}px, 0px, 0px)`,
                }}
                ref={(ref) => {
                    contentRef.current = ref;

                    if (!hasSetRef.current) {
                        hasSetRef.current = true;
                        setBuildingExplorerMobileRefState(
                            (buildingExplorerMobileRefState) => ({
                                ...buildingExplorerMobileRefState,
                                current: ref,
                            })
                        );
                    }
                }}
            >
                {children}
            </S.DragScrollContent>
        </S.DragScroll>
    );
};
