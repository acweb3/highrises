import { Header } from 'components/Explorer/Masthead/Header';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { Story } from 'components/Explorer/Masthead/Story';
import { Traits } from 'components/Explorer/Masthead/Traits';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const mastheadRef = useRef(null);

    useEffect(() => {
        mastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.Masthead ref={mastheadRef}>
            <Header />
            <Story isModal activeHighrise={activeHighrise} />
            <Traits activeHighrise={activeHighrise} />
        </S.Masthead>
    );
};
