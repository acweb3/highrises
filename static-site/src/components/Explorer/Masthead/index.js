import { useDelayed } from 'common/hooks/useDelayed';
import { Header } from 'components/Explorer/Masthead/Header';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { Story } from 'components/Explorer/Masthead/Story';
import { Traits } from 'components/Explorer/Masthead/Traits';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef, useState } from 'react';

export const Masthead = () => {
    const [didScroll, setDidScroll] = useState(false);
    const delayedDidScrolled = useDelayed(didScroll, 400);
    const { activeHighrise } = useActiveHighriseContext();
    const mastheadRef = useRef(null);

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.Masthead ref={mastheadRef} onScroll={() => setDidScroll(true)}>
            <Header />
            <Story isModal activeHighrise={activeHighrise} />
            <Traits activeHighrise={activeHighrise} />

            {!delayedDidScrolled && (
                <S.MastheadScrollMore isShowing={!didScroll}>
                    Scroll To Read More
                </S.MastheadScrollMore>
            )}
        </S.Masthead>
    );
};
