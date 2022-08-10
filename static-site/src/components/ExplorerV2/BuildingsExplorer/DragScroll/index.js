import { useDocumentListener } from 'common/hooks/useDocumentListener';
import * as S from 'components/ExplorerV2/BuildingsExplorer/DragScroll/DragScroll.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useThrottle } from 'react-use';

export const DragScroll = ({ children }) => {
    const contentRef = useRef(null);
    const hasSetRef = useRef(false);
    const { explorerRef, setBuildingExplorerMobileRefState } =
        useExplorerRefContext();
    const { activeHighrise, highrises } = useActiveHighriseContext();
    const [scroll, setScroll] = useState(0);
    const throttledScroll = useThrottle(scroll, 100);

    const isLastHighrise = useMemo(() => {
        return (
            activeHighrise &&
            activeHighrise.name === highrises[highrises.length - 1].name
        );
    }, [activeHighrise, highrises]);

    useDocumentListener(
        'scroll',
        () => {
            const offset =
                window.scrollY -
                30 -
                (window.scrollY +
                    explorerRef.current.getBoundingClientRect().top ?? 0);

            setScroll(
                Math.max(
                    Math.min(
                        offset,
                        contentRef.current.scrollWidth -
                            contentRef.current.offsetWidth +
                            (isLastHighrise ? 480 : 0)
                    ),
                    0
                )
            );
        },
        [isLastHighrise]
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
                        index * Math.max(window.innerWidth / 4, 400) +
                            64 +
                            (window.scrollY +
                                explorerRef.current.getBoundingClientRect()
                                    .top ?? 0)
                    ),
                    0
                )
            );
        }

        const offset =
            window.scrollY -
            30 -
            (window.scrollY + explorerRef.current.getBoundingClientRect().top ??
                0);

        setScroll(
            Math.max(
                Math.min(
                    offset,
                    contentRef.current.scrollWidth -
                        contentRef.current.offsetWidth +
                        (isLastHighrise ? 480 : 0)
                ),
                0
            )
        );
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
