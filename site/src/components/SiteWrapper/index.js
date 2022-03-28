import { useDocumentListener } from '../../common/hooks/useDocumentListener';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useRef } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

export const SiteWrapper = ({ children }) => {
    const { isExpandedView, setIsExpandedView } = useActiveHighriseContext();
    const [lock, setLock] = useState(undefined);
    const lockRef = useRef(undefined);

    useEffect(() => {
        if (isExpandedView) {
            setLock(window.scrollY);
            lockRef.current = window.scrollY;
        } else {
            setLock(undefined);
        }
    }, [isExpandedView]);

    useEffect(() => {
        if (!lock && lockRef.current) {
            window.scrollTo({ top: lockRef.current });
            lockRef.current = undefined;
        }
    }, [lock]);

    useDocumentListener(
        'keydown',
        (e) => {
            if (e.key === 'Escape' && lock) {
                setIsExpandedView(false);
            }
        },
        [lock]
    );

    return (
        <>
            <S.GlobalStyle />
            <S.SiteWrapper lock={lock}>{children}</S.SiteWrapper>
        </>
    );
};
