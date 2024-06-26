import { capitalize, getBuildingURL } from 'common/helpers';
import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import {
    FeatureImage,
    FeatureImageFilterButton,
} from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { About } from 'components/Explorer/Masthead/About';
import { Header } from 'components/Explorer/Masthead/Header';
import { SortBar } from 'components/Explorer/SortBar';
import { Metadata } from 'components/Metadata';
import { ModalContent } from 'components/ui/Modal';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useWindowSizeContext } from 'contexts/WindowSize';
import kebabCase from 'just-kebab-case';
import { useEffect, useRef, useState } from 'react';
import { use100vh } from 'react-div-100vh';

const BUILDING_EXPLORER_MIN_HEIGHT = 120;

const useBuildingExplorerHeight = () => {
    const hundo = use100vh();
    const headerRef = useRef();
    const featureImageRef = useRef();
    const [buildingExplorerHeight, setBuildingExplorerHeight] = useState(
        BUILDING_EXPLORER_MIN_HEIGHT
    );

    useEffect(() => {
        const { height: featureImageHeight } =
            featureImageRef.current.getBoundingClientRect();
        const headerRect = headerRef.current?.getBoundingClientRect();
        const headerHeight = headerRect?.height ?? 0;

        setBuildingExplorerHeight(
            Math.max(
                hundo - featureImageHeight - headerHeight,
                BUILDING_EXPLORER_MIN_HEIGHT
            )
        );
    }, [hundo]);

    return {
        headerRef,
        hundo,
        featureImageRef,
        buildingExplorerHeight,
    };
};

const MobileExplorer = () => {
    const hundo = use100vh();
    const mobileExplorerRef = useRef();

    return (
        <S.MobileExplorer
            ref={mobileExplorerRef}
            style={{
                height: hundo,
            }}
        >
            <Header />
            <div
                style={{
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'sticky',
                        top: '72px',
                        zIndex: 3,
                        marginBottom: '88px',
                        marginLeft: '8px',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                        }}
                    >
                        <FeatureImageFilterButton
                            onSort={() => {
                                mobileExplorerRef.current?.scrollTo({
                                    top: 0,
                                });
                            }}
                        />
                    </div>
                </div>
                <BuildingsExplorer />

                <Masthead />
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '32px 0 16px',
                }}
            >
                <ModalContent isModal={false} />
            </div>

            <About />
        </S.MobileExplorer>
    );
};

const TabletExplorer = () => {
    const { featureImageRef, buildingExplorerHeight } =
        useBuildingExplorerHeight();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection isMasthead>
                <S.DesktopExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                <FeatureImage
                    ref={featureImageRef}
                    buildingExplorerHeight={buildingExplorerHeight}
                />
                <BuildingsExplorer
                    buildingExplorerHeight={buildingExplorerHeight}
                />
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};

const DesktopExplorer = () => {
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection isMasthead>
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
    const { isMobile, isTablet } = useWindowSizeContext();
    const { activeHighrise, activeDescription } = useActiveHighriseContext();

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
                            ogUrl={`highrises.hythacg.com/${kebabCase(
                                capitalize(activeDescription.header)
                            )}/`}
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

            {(() => {
                if (isMobile) {
                    return <MobileExplorer />;
                }

                if (isTablet) {
                    return <TabletExplorer />;
                }

                return <DesktopExplorer />;
            })()}
        </>
    );
};
