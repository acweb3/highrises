import { useDelayed } from 'common/hooks/useDelayed';
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

const MobileMasthead = ({ buildingExplorerHeight }) => {
    const mastheadRef = useRef();
    const { activeHighrise, activeDescription, isAboutOverride } =
        useActiveHighriseContext();
    const { isMobilePopoverOpen, setIsMobilePopoverOpen } =
        useMobilePopoverContext();
    const [isCollectiblesShowing, setIsCollectiblesShowing] = useState(false);

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.MobileMasthead buildingExplorerHeight={buildingExplorerHeight}>
            <S.MobileReadMore
                onClick={() =>
                    setIsMobilePopoverOpen(
                        (isMobilePopoverOpen) => !isMobilePopoverOpen
                    )
                }
            >
                {isMobilePopoverOpen ? 'Show Less' : 'Read More'}
            </S.MobileReadMore>

            <S.MobileMastheadShadowWrapper ref={mastheadRef}>
                {/** # TODO => Fix this so there is white shadow around the words here */}
                {/* <S.MobileMastheadShadow /> */}
                <S.MobileMastheadContent
                    isMobilePopoverOpen={isMobilePopoverOpen}
                >
                    {(() => {
                        if (
                            activeDescription?.header === 'About' ||
                            activeDescription?.copy === true ||
                            isAboutOverride
                        ) {
                            return <About />;
                        }

                        return (
                            <>
                                <S.MobileMastheadSection>
                                    <BuildingName />
                                </S.MobileMastheadSection>

                                {activeHighrise && (
                                    <S.MobileMastheadSection>
                                        <S.MobileMastheadNav>
                                            <S.MobileMastheadButton
                                                isActive={
                                                    !isCollectiblesShowing
                                                }
                                                onClick={() => {
                                                    setIsCollectiblesShowing(
                                                        false
                                                    );
                                                }}
                                            >
                                                About
                                            </S.MobileMastheadButton>

                                            <S.MobileMastheadButton
                                                isActive={isCollectiblesShowing}
                                                onClick={() => {
                                                    setIsCollectiblesShowing(
                                                        true
                                                    );
                                                }}
                                            >
                                                Collectibles
                                            </S.MobileMastheadButton>
                                        </S.MobileMastheadNav>
                                    </S.MobileMastheadSection>
                                )}

                                {(() => {
                                    if (
                                        activeDescription &&
                                        typeof activeDescription.copy ===
                                            'string'
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

                                    if (isCollectiblesShowing) {
                                        return (
                                            <div
                                                css={`
                                                    padding-bottom: 32px;
                                                `}
                                            >
                                                <Collectibles
                                                    isHeaderShowing={false}
                                                />
                                            </div>
                                        );
                                    }

                                    return (
                                        <>
                                            <S.MobileMastheadSection>
                                                <Story
                                                    description={
                                                        activeHighrise.description
                                                    }
                                                />
                                                <Traits
                                                    activeHighrise={
                                                        activeHighrise
                                                    }
                                                />
                                            </S.MobileMastheadSection>

                                            <Collectibles />

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
            </S.MobileMastheadShadowWrapper>
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
                <S.DesktopMastheadCloseButton
                    onClick={() => {
                        reset();
                    }}
                >
                    <S.DesktopMastheadClose />
                </S.DesktopMastheadCloseButton>
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

export const Masthead = ({ buildingExplorerHeight }) => {
    const { isMobile } = useWindowSizeContext();

    return (
        <>
            {isMobile ? (
                <MobileMasthead
                    buildingExplorerHeight={buildingExplorerHeight}
                />
            ) : (
                <DesktopMasthead />
            )}
        </>
    );
};
