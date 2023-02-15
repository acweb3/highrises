import { useDelayed } from 'common/hooks/useDelayed';
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
    const { activeHighrise, activeDescription } = useActiveHighriseContext();
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

            <S.MobileMastheadShadow>
                <S.MobileMastheadContent
                    ref={mastheadRef}
                    isMobilePopoverOpen={isMobilePopoverOpen}
                >
                    <S.MobileMastheadSection>
                        <BuildingName />
                    </S.MobileMastheadSection>

                    {activeHighrise && (
                        <S.MobileMastheadSection>
                            <S.MobileMastheadNav>
                                <S.MobileMastheadButton
                                    isActive={!isCollectiblesShowing}
                                    onClick={() => {
                                        setIsCollectiblesShowing(false);
                                    }}
                                >
                                    About
                                </S.MobileMastheadButton>

                                <S.MobileMastheadButton
                                    isActive={isCollectiblesShowing}
                                    onClick={() => {
                                        setIsCollectiblesShowing(true);
                                    }}
                                >
                                    Collectibles
                                </S.MobileMastheadButton>
                            </S.MobileMastheadNav>
                        </S.MobileMastheadSection>
                    )}

                    {(() => {
                        if (activeDescription) {
                            return (
                                <>
                                    <S.MobileMastheadSection>
                                        <Story
                                            description={activeDescription.copy}
                                            isModal
                                        />
                                    </S.MobileMastheadSection>

                                    <S.MobileMastheadSection>
                                        <EmailCollection />
                                    </S.MobileMastheadSection>
                                </>
                            );
                        }

                        if (isCollectiblesShowing) {
                            return <Collectibles isHeaderShowing={false} />;
                        }

                        return (
                            <>
                                <S.MobileMastheadSection>
                                    <Story
                                        description={activeHighrise.description}
                                        isModal
                                    />
                                    <Traits activeHighrise={activeHighrise} />
                                </S.MobileMastheadSection>

                                <Collectibles />

                                <S.MobileMastheadSection>
                                    <EmailCollection />
                                </S.MobileMastheadSection>
                            </>
                        );
                    })()}
                </S.MobileMastheadContent>
            </S.MobileMastheadShadow>
        </S.MobileMasthead>
    );
};

const DesktopMasthead = () => {
    const [didScroll, setDidScroll] = useState(false);
    const delayedDidScrolled = useDelayed(didScroll, 400);
    const { activeHighrise, activeDescription } = useActiveHighriseContext();
    const mastheadRef = useRef(null);
    const collectiblesRef = useRef();

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.DesktopMasthead
            ref={mastheadRef}
            onScroll={() => setDidScroll(true)}
        >
            <S.DesktopMastheadSection>
                <Header />
                <BuildingName />

                {activeHighrise && (
                    <S.DesktopMastheadNav>
                        <BaseButton
                            onClick={() => {
                                collectiblesRef.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center',
                                });
                            }}
                        >
                            Collectibles
                        </BaseButton>
                    </S.DesktopMastheadNav>
                )}

                <Story
                    isModal
                    description={
                        activeDescription?.copy ?? activeHighrise.description
                    }
                />
                {activeHighrise && <Traits activeHighrise={activeHighrise} />}
            </S.DesktopMastheadSection>

            {activeHighrise && <Collectibles ref={collectiblesRef} />}

            <S.DesktopMastheadSection>
                <EmailCollection />
            </S.DesktopMastheadSection>

            {!delayedDidScrolled && (
                <S.DesktopMastheadScrollMore isShowing={!didScroll}>
                    Scroll To Read More
                </S.DesktopMastheadScrollMore>
            )}
        </S.DesktopMasthead>
    );
};

export const Masthead = ({ buildingExplorerHeight }) => {
    const { isMobile } = useWindowSizeContext();

    if (isMobile === undefined) {
        return null;
    }

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
