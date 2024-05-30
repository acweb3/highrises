import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { Modal } from 'components/ui/Modal';
import { useWindowSizeContext } from 'contexts/WindowSize';

export const SiteWrapper = ({ children }) => {
    const { isMobile, isTablet } = useWindowSizeContext();

    const isWindowSizeLoaded = isMobile !== undefined && isTablet !== undefined;

    return (
        <>
            <Modal />
            <S.GlobalStyle />

            <S.SiteWrapperOffset />

            <S.SiteWrapperScroll>
                <S.SiteWrapper>{isWindowSizeLoaded && children}</S.SiteWrapper>
            </S.SiteWrapperScroll>
        </>
    );
};
