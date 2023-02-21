import { getBuildingURL } from 'common/helpers';
import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { FeatureImage } from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { Header } from 'components/Explorer/Masthead/Header';
import { SortBar } from 'components/Explorer/SortBar';
import { Metadata } from 'components/Metadata';
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

export const Explorer = ({ thumbnail }) => {
    const { isMobile } = useWindowSizeContext();
    const { activeHighrise, activeDescription } = useActiveHighriseContext();

    if (isMobile === undefined) {
        return null;
    }

    const aka = activeHighrise?.attributes.find(
        ({ trait_type }) => trait_type === 'AKA now'
    );

    return (
        <>
            {(() => {
                if (activeHighrise) {
                    return (
                        <Metadata
                            title={`${activeHighrise.name}${
                                aka ? ` (${aka.value})` : ''
                            } - HYTHA.CG`}
                            description={activeHighrise.description}
                            ogUrl={`highrises.hythacg.com${getBuildingURL(
                                activeHighrise
                            )}`}
                            thumbnail={thumbnail}
                            thumbnailAlt={activeHighrise.name}
                        />
                    );
                }

                if (activeDescription && activeDescription.header !== 'About') {
                    return (
                        <Metadata
                            title={`${activeDescription.header} - HYTHA.CG`}
                            description={activeDescription.copy}
                            ogUrl={'highrises.hythacg.com'}
                            thumbnail={thumbnail}
                            thumbnailAlt={''}
                        />
                    );
                }

                return (
                    <Metadata
                        title={'Highrises - HYTHA.CG'}
                        description={
                            'Highrises are the iconic elements of American cities. Reaching radical new heights in technological advancement, skyscrapers fused Classical, Renaissance, and Gothic motifs onto steel and defined a new architectural language with Art Deco and International.'
                        }
                        ogUrl={'highrises.hythacg.com'}
                        thumbnail={thumbnail}
                        thumbnailAlt={''}
                    />
                );
            })()}

            {isMobile ? <MobileExplorer /> : <DesktopExplorer />}
        </>
    );
};
