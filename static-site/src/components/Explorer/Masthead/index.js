import { useDelayed } from 'common/hooks/useDelayed';
import { FeatureImageZoom } from 'components/Explorer/FeatureImage';
import { About } from 'components/Explorer/Masthead/About';
import { BuildingName } from 'components/Explorer/Masthead/BuildingName';
import { Collectibles } from 'components/Explorer/Masthead/Collectibles';
import { EmailCollection } from 'components/Explorer/Masthead/EmailCollection';
import { Header } from 'components/Explorer/Masthead/Header';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { Story } from 'components/Explorer/Masthead/Story';
import { Traits } from 'components/Explorer/Masthead/Traits';
import { BaseButton } from 'components/ui/BaseButton';
import { BlurLoader } from 'components/ui/BlurLoader';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMobilePopoverContext } from 'contexts/MobilePopover';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useEffect, useRef, useState } from 'react';
import { use100vh } from 'react-div-100vh';

const MobileMastheadZoom = ({ activeHighrise }) => {
    const [isZoom, setIsZoom] = useState(false);

    useEffect(() => {
        if (!activeHighrise) {
            setIsZoom(false);
        }
    }, [activeHighrise]);

    if (isZoom) {
        return (
            <div
                style={{
                    position: 'fixed',
                    zIndex: 777,
                    background: '#fff',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 16px 16px',
                }}
            >
                <S.MastheadCloseButton
                    fill
                    style={{
                        top: '72px',
                        right: '24px',
                    }}
                    onClick={() => {
                        setIsZoom(false);
                    }}
                >
                    <S.MastheadClose white />
                </S.MastheadCloseButton>

                <FeatureImageZoom
                    buildingExplorerHeight={0}
                    didShowInstructions={true}
                    setDidShowInstructions={() => {}}
                />
            </div>
        );
    }

    return (
        <div
            onClick={() => setIsZoom(true)}
            style={{
                cursor: 'pointer',
                padding: '16px 16px 8px',
            }}
        >
            <BlurLoader
                src={activeHighrise.featureSrc}
                blurSrc={activeHighrise.blurFeatureSrc}
                alt={`${activeHighrise.name} feature image`}
            />
        </div>
    );
};

const MobileMasthead = () => {
    const hundo = use100vh();
    const mastheadRef = useRef();
    const {
        activeHighrise,
        activeDescription,
        isAboutOverride,
        setActiveHighrise,
    } = useActiveHighriseContext();
    const { isMobilePopoverOpen, setIsMobilePopoverOpen } =
        useMobilePopoverContext();

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    if (!isMobilePopoverOpen) {
        return null;
    }

    const close = () => {
        setIsMobilePopoverOpen(false);
        setActiveHighrise(undefined);
    };

    return (
        <S.MobileMasthead
            style={{
                height: `${hundo - 60}px`,
            }}
            onClick={close}
        >
            <S.MobileMastheadContent
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {(() => {
                    // # FIXME: This is a hack to prevent the about section from showing up on mobile
                    if (
                        activeDescription?.header === 'About' ||
                        activeDescription?.copy === true ||
                        isAboutOverride
                    ) {
                        return null;
                    }

                    return (
                        <>
                            <S.MobileMastheadSticky>
                                <S.MobileMastheadSection>
                                    <BuildingName smaller />

                                    <S.MastheadCloseButton
                                        onClick={() => {
                                            close();
                                        }}
                                    >
                                        <S.MastheadClose />
                                    </S.MastheadCloseButton>
                                </S.MobileMastheadSection>
                            </S.MobileMastheadSticky>

                            {(() => {
                                if (
                                    activeDescription &&
                                    typeof activeDescription.copy === 'string'
                                ) {
                                    return (
                                        <>
                                            <S.MobileMastheadSection>
                                                <Story
                                                    description={
                                                        activeDescription.copy
                                                    }
                                                />
                                            </S.MobileMastheadSection>

                                            <S.MobileEmailCollectionWrapper>
                                                <EmailCollection />
                                            </S.MobileEmailCollectionWrapper>
                                        </>
                                    );
                                }

                                return (
                                    <>
                                        <S.MobileMastheadSection>
                                            <MobileMastheadZoom
                                                activeHighrise={activeHighrise}
                                            />

                                            <Traits
                                                activeHighrise={activeHighrise}
                                            />

                                            <Story
                                                description={
                                                    activeHighrise.description
                                                }
                                            />
                                        </S.MobileMastheadSection>

                                        <div style={{ marginTop: 32 }}>
                                            <Collectibles />
                                        </div>

                                        <S.MobileEmailCollectionWrapper>
                                            <EmailCollection />
                                        </S.MobileEmailCollectionWrapper>
                                    </>
                                );
                            })()}
                        </>
                    );
                })()}
            </S.MobileMastheadContent>
        </S.MobileMasthead>
    );
};

const DesktopMasthead = () => {
    const [didScroll, setDidScroll] = useState(false);
    const delayedDidScrolled = useDelayed(didScroll, 400);
    const { activeHighrise, activeDescription, reset } =
        useActiveHighriseContext();
    const mastheadRef = useRef(null);
    const collectiblesRef = useRef();

    // Descriptions, with exception of about, are short
    const isShortDescription =
        activeDescription && activeDescription.header !== 'About';

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.DesktopMasthead
            ref={mastheadRef}
            onScroll={() => setDidScroll(true)}
        >
            {activeDescription?.header !== 'About' && (
                <S.MastheadCloseButton
                    onClick={() => {
                        reset();
                    }}
                >
                    <S.MastheadClose />
                </S.MastheadCloseButton>
            )}

            {(() => {
                if (
                    activeDescription?.header === 'About' ||
                    activeDescription?.copy === true
                ) {
                    return (
                        <>
                            <S.DesktopMastheadSection>
                                <Header />
                            </S.DesktopMastheadSection>
                            <About />
                        </>
                    );
                }

                return (
                    <>
                        <S.DesktopMastheadSection
                            isDescription={Boolean(activeDescription)}
                        >
                            <Header />
                            <BuildingName />
                            {activeHighrise && (
                                <S.DesktopMastheadNav>
                                    <BaseButton
                                        onClick={() => {
                                            collectiblesRef.current.scrollIntoView(
                                                {
                                                    behavior: 'smooth',
                                                    block: 'center',
                                                }
                                            );
                                        }}
                                    >
                                        Collectibles
                                    </BaseButton>
                                </S.DesktopMastheadNav>
                            )}

                            <Story
                                description={
                                    activeDescription?.copy ??
                                    activeHighrise.description
                                }
                            />
                            {activeHighrise && (
                                <Traits activeHighrise={activeHighrise} />
                            )}
                        </S.DesktopMastheadSection>

                        {activeHighrise && (
                            <Collectibles ref={collectiblesRef} />
                        )}

                        <S.DesktopMastheadEmailCollectionWrapper>
                            <EmailCollection />
                        </S.DesktopMastheadEmailCollectionWrapper>
                    </>
                );
            })()}

            {!delayedDidScrolled && !isShortDescription && (
                <S.DesktopMastheadScrollMore isShowing={!didScroll}>
                    Scroll To Read More
                </S.DesktopMastheadScrollMore>
            )}
        </S.DesktopMasthead>
    );
};

export const Masthead = () => {
    const { isMobile } = useWindowSizeContext();

    return <>{isMobile ? <MobileMasthead /> : <DesktopMasthead />}</>;
};
