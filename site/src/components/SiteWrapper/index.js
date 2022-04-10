import { useDocumentListener } from '../../common/hooks/useDocumentListener';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMapViewContext } from 'contexts/MapView';
import { useEffect, useState, useRef } from 'react';

export const SiteWrapper = ({ children }) => {
    const { isExpandedView, setIsExpandedView } = useActiveHighriseContext();
    const { isMapView, setIsMapView } = useMapViewContext();
    const [lock, setLock] = useState(undefined);
    const lockRef = useRef(undefined);

    useEffect(() => {
        if (isExpandedView || isMapView) {
            setLock(window.scrollY);
            lockRef.current = window.scrollY;
        } else {
            setLock(undefined);
        }
    }, [isExpandedView, isMapView]);

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
                setIsMapView(false);
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
