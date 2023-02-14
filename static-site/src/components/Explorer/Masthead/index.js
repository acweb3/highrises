import { useDelayed } from 'common/hooks/useDelayed';
import { useWindowSize } from 'common/hooks/useWindowSize';
import { BuildingName } from 'components/Explorer/Masthead/BuildingName';
import { Collectibles } from 'components/Explorer/Masthead/Collectibles';
import { EmailCollection } from 'components/Explorer/Masthead/EmailCollection';
import { Header } from 'components/Explorer/Masthead/Header';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { Story } from 'components/Explorer/Masthead/Story';
import { Traits } from 'components/Explorer/Masthead/Traits';
import { BaseButton } from 'components/ui/BaseButton';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef, useState } from 'react';

const MobileMasthead = ({ activeSort }) => {
    const { activeHighrise } = useActiveHighriseContext();
    const [isMastheadShowing, setIsMastheadShowing] = useState(false);
    const [isCollectiblesShowing, setIsCollectiblesShowing] = useState(false);

    console.log({ isMastheadShowing });

    return (
        <S.MobileMasthead>
            <S.MobileReadMore
                onClick={() =>
                    setIsMastheadShowing(
                        (isMastheadShowing) => !isMastheadShowing
                    )
                }
            >
                Read More
            </S.MobileReadMore>

            <S.MobileMastheadContent isMastheadShowing={isMastheadShowing}>
                <S.MobileMastheadSection>
                    <BaseButton
                        onClick={() => {
                            setIsCollectiblesShowing(
                                (isCollectiblesShowing) =>
                                    !isCollectiblesShowing
                            );
                        }}
                    >
                        Collectibles
                    </BaseButton>

                    <BaseButton
                        onClick={() => {
                            setIsCollectiblesShowing(true);
                        }}
                    >
                        Collectibles
                    </BaseButton>

                    <Story isModal activeHighrise={activeHighrise} />
                    <Traits activeHighrise={activeHighrise} />
                </S.MobileMastheadSection>

                <Collectibles />

                <S.MobileMastheadSection>
                    <EmailCollection />
                </S.MobileMastheadSection>
            </S.MobileMastheadContent>
        </S.MobileMasthead>
    );
};

const DesktopMasthead = ({ activeSort }) => {
    const [didScroll, setDidScroll] = useState(false);
    const delayedDidScrolled = useDelayed(didScroll, 400);
    const { activeHighrise } = useActiveHighriseContext();
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
                <Header activeSort={activeSort} />
                <BuildingName />

                <div
                    css={`
                        display: flex;
                        justify-content: center;
                        padding: 16px 0 32px;
                    `}
                >
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
                </div>

                <Story isModal activeHighrise={activeHighrise} />
                <Traits activeHighrise={activeHighrise} />
            </S.DesktopMastheadSection>

            <Collectibles ref={collectiblesRef} />

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

export const Masthead = ({ activeSort }) => {
    const { isMobile } = useWindowSize();

    if (isMobile === undefined) {
        return null;
    }

    return (
        <>
            {isMobile ? (
                <MobileMasthead activeSort={activeSort} />
            ) : (
                <DesktopMasthead activeSort={activeSort} />
            )}
        </>
    );
};
