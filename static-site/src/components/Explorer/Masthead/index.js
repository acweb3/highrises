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
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMobilePopoverContext } from 'contexts/MobilePopover';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useEffect, useRef, useState } from 'react';

const MobileMasthead = () => {
    const mastheadRef = useRef();
    const {
        activeHighrise,
        activeDescription,
        isAboutOverride,
        setIsAboutOverride,
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
        setIsAboutOverride(false);
    };

    return (
        <S.MobileMasthead onClick={close}>
            <S.MobileMastheadContent
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
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
                                            <FeatureImageZoom
                                                buildingExplorerHeight={0}
                                                didShowInstructions={true}
                                                setDidShowInstructions={() => {}}
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
