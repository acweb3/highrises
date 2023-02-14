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
import { useEffect, useRef, useState } from 'react';

export const Masthead = ({ activeSort }) => {
    const [didScroll, setDidScroll] = useState(false);
    const delayedDidScrolled = useDelayed(didScroll, 400);
    const { activeHighrise } = useActiveHighriseContext();
    const mastheadRef = useRef(null);
    const collectiblesRef = useRef();

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.Masthead ref={mastheadRef} onScroll={() => setDidScroll(true)}>
            <S.MastheadSection>
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
            </S.MastheadSection>

            <Collectibles ref={collectiblesRef} />

            <S.MastheadSection>
                <EmailCollection />
            </S.MastheadSection>

            {!delayedDidScrolled && (
                <S.MastheadScrollMore isShowing={!didScroll}>
                    Scroll To Read More
                </S.MastheadScrollMore>
            )}
        </S.Masthead>
    );
};
