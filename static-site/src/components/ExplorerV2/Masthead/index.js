import { Story } from './Story';
import { Traits } from './Traits';
import * as S from 'components/ExplorerV2/Masthead/Masthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const desktopMastheadRef = useRef(null);

    useEffect(() => {
        desktopMastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.DesktopMasthead ref={desktopMastheadRef}>
            <Story isModal activeHighrise={activeHighrise} />
            <Traits activeHighrise={activeHighrise} />
        </S.DesktopMasthead>
    );
};
