import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { MobileExplorer } from 'components/ExplorerV2/MobileExplorer';
import { Header } from 'components/ui/Header';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useState } from 'react';
import { Bars } from 'react-loading-icons';

export const ExplorerV2 = () => {
    const { isLoaded, isSmallish } = useWindowSize();
    const { explorerRef, buildingExplorerMobileRefState } =
        useExplorerRefContext();
    const [isShow, setIsShow] = useState(false);

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

    useEffect(() => {
        let sto;
        if (isLoaded) {
            sto = setTimeout(() => {
                setIsShow(true);
            }, 800);
        }

        return () => {
            clearTimeout(sto);
        };
    }, [isLoaded]);

    return (
        <>
            <div
                css={`
                    background: #fff;
                    padding: 32px 64px;
                    min-height: 96px;
                `}
            >
                {/* <S.ExplorerHeader>Explore all highrises</S.ExplorerHeader> */}
            </div>
            <S.ExplorerV2
                ref={explorerRef}
                css={`
                    position: relative;
                    background: #a8b5bd;
                    transition: border-color 400ms;
                    border-color: ${isShow ? 'initial' : 'transparent'};
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
                        opacity: ${isShow ? 1 : 0};
                        transition: opacity 100ms;
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
