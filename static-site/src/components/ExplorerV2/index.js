import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { MobileExplorer } from 'components/ExplorerV2/MobileExplorer';
import { Paragraph } from 'components/ui/Paragraph';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';
import { Bars } from 'react-loading-icons';

const getExplorerHeight = (explorerRef) => {
    let cached;

    return () => {
        if (!cached && explorerRef.current?.children[0].offsetHeight) {
            cached = explorerRef.current?.children[0].offsetHeight * 2;
        }

        return cached;
    };
};

export const ExplorerV2 = () => {
    const { isLoaded, isSmallish } = useWindowSize();
    const { explorerRef, buildingExplorerMobileRefState } =
        useExplorerRefContext();

    const explorerHeight = useRef(getExplorerHeight(explorerRef));

    const height = buildingExplorerMobileRefState.current
        ? explorerHeight.current() +
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
        <>
            <div
                css={`
                    background: #fff;
                    padding: 48px 64px 32px;
                    min-height: 96px;
                `}
            >
                <S.ExplorerHeader>Explore all highrises</S.ExplorerHeader>
                <Paragraph
                    css={`
                        text-indent: 0;
                        max-width: 750px;
                        margin-bottom: 16px !important;
                    `}
                >
                    Flip through the collection of more than 50 historic
                    American skyscrapers and learn how each one came to be. Sort
                    by architectural style, city, decade, and more to find your
                    favorites!
                </Paragraph>
            </div>
            <S.ExplorerV2
                ref={explorerRef}
                css={`
                    position: relative;
                    background: #a8b5bd;
                    transition: border-color 400ms;
                `}
                style={{
                    height: isLoaded && !isSmallish ? height : undefined,
                }}
            >
                <div
                    css={`
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;

                        z-index: 0;

                        ${(props) => props.theme.breakpoints.medium`
                        padding-bottom: 320px;
                    `}
                    `}
                >
                    <Bars stroke="#FFF" />
                </div>
                <div
                    css={`
                        height: 100%;
                        z-index: 1;
                    `}
                >
                    {isSmallish ? <MobileExplorer /> : <DesktopExplorer />}
                </div>
            </S.ExplorerV2>
        </>
    );
};
