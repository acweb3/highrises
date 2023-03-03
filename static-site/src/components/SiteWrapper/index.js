import { useWindowListener } from 'common/hooks/useWindowListener';
import { Nav } from 'components/Nav';
import { MobileMenu } from 'components/SiteWrapper/MobileMenu';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useEffect, useRef, useState } from 'react';

const useTransformScroll = () => {
    const [isTransform, setIsTransform] = useState(false);
    const scrollRef = useRef(0);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        scrollRef.current = document.documentElement.scrollHeight;
    }, []);

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
    const { isMobile, isTablet } = useWindowSizeContext();

    const isWindowSizeLoaded = isMobile !== undefined && isTablet !== undefined;

    return (
        <>
            <MobileMenu />
            <S.GlobalStyle />

            <S.SiteWrapperNav>
                {isWindowSizeLoaded && <Nav ref={navRef} />}
            </S.SiteWrapperNav>

            <S.SiteWrapperOffset />

            <S.SiteWrapperScroll
                transform={isTransform ? navRef.current.offsetHeight : 0}
            >
                <S.SiteWrapper>{isWindowSizeLoaded && children}</S.SiteWrapper>
            </S.SiteWrapperScroll>
        </>
    );
};
