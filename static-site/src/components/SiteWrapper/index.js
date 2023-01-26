import { useWindowListener } from 'common/hooks/useWindowListener';
import { Nav } from 'components/Nav';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { useEffect, useRef, useState } from 'react';

const useTransformScroll = () => {
    const [isTransform, setIsTransform] = useState(false);
    const scrollRef = useRef(document.documentElement.scrollHeight);
    const isInitializedRef = useRef(false);

    useWindowListener(
        'scroll',
        (e) => {
            if (isInitializedRef.current) {
                setIsTransform(
                    document.documentElement.scrollTop < scrollRef.current
                );

                scrollRef.current = document.documentElement.scrollTop;
            }
        },
        []
    );

    // Sensible guess for when we should start tracking scroll events.
    useEffect(() => {
        const sto = setTimeout(() => {
            isInitializedRef.current = true;
        }, 1500);

        return () => clearTimeout(sto);
    }, []);

    return isTransform;
};

export const SiteWrapper = ({ children }) => {
    const isTransform = useTransformScroll();
    const navRef = useRef();

    return (
        <>
            <S.GlobalStyle />

            <S.SiteWrapperNav>
                <Nav ref={navRef} />
            </S.SiteWrapperNav>

            <S.SiteWrapperOffset />

            <S.SiteWrapperScroll
                transform={isTransform ? navRef.current.offsetHeight : 0}
            >
                <S.SiteWrapper>{children}</S.SiteWrapper>
            </S.SiteWrapperScroll>
        </>
    );
};
