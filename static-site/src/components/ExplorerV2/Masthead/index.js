import { Story } from './Story';
import { Traits } from './Traits';
import * as S from 'components/ExplorerV2/Masthead/Masthead.styled';
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
            <Story isModal activeHighrise={activeHighrise} />
            <Traits activeHighrise={activeHighrise} />
        </S.Masthead>
    );
};
