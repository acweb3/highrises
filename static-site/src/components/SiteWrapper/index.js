import { MobileMenu } from 'components/SiteWrapper/MobileMenu';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { Modal } from 'components/ui/Modal';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { useRef } from 'react';

export const SiteWrapper = ({ children }) => {
    const navRef = useRef();
    const { isMobile, isTablet } = useWindowSizeContext();

    const isWindowSizeLoaded = isMobile !== undefined && isTablet !== undefined;

    return (
        <>
            <Modal />
            <MobileMenu />
            <S.GlobalStyle />

            <S.SiteWrapperOffset />

            <S.SiteWrapperScroll>
                <S.SiteWrapper>{isWindowSizeLoaded && children}</S.SiteWrapper>
            </S.SiteWrapperScroll>
        </>
    );
};
