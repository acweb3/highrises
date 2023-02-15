import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { FeatureImage } from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { Header } from 'components/Explorer/Masthead/Header';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useEffect, useRef, useState } from 'react';
import { use100vh } from 'react-div-100vh';

const BUILDING_EXPLORER_MIN_HEIGHT = 80;

const MobileExplorer = () => {
    const hundo = use100vh();
    const headerRef = useRef();
    const featureImageRef = useRef();
    const [buildingExplorerHeight, setBuildingExplorerHeight] = useState(
        BUILDING_EXPLORER_MIN_HEIGHT
    );

    useEffect(() => {
        const { height: featureImageHeight } =
            featureImageRef.current.getBoundingClientRect();
        const { height: headerHeight } =
            headerRef.current.getBoundingClientRect();

        setBuildingExplorerHeight(
            Math.max(
                hundo - featureImageHeight - headerHeight,
                BUILDING_EXPLORER_MIN_HEIGHT
            )
        );
    }, [hundo]);

    return (
        <S.MobileExplorer style={{ height: hundo }}>
            <S.MobileExplorerPopover>
                <Header ref={headerRef} />
                <FeatureImage
                    ref={featureImageRef}
                    buildingExplorerHeight={buildingExplorerHeight}
                />
                <Masthead buildingExplorerHeight={buildingExplorerHeight} />
            </S.MobileExplorerPopover>

            <BuildingsExplorer
                buildingExplorerHeight={buildingExplorerHeight}
            />
        </S.MobileExplorer>
    );
};

const DesktopExplorer = () => {
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <S.DesktopExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                <FeatureImage />
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                {Boolean(highrises.length) && (
                    <S.DesktopExplorerBuildings>
                        <BuildingsExplorer />
                        <SortBar />
                    </S.DesktopExplorerBuildings>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};

export const Explorer = () => {
    const { isMobile } = useWindowSizeContext();

    if (isMobile === undefined) {
        return null;
    }

    return <>{isMobile ? <MobileExplorer /> : <DesktopExplorer />}</>;
};
