import * as S from 'components/SiteWrapper/SiteWrapper.styled';

export const SiteWrapper = ({ children }) => {
    return (
        <>
            <S.GlobalStyle />
            <S.SiteWrapper>{children}</S.SiteWrapper>
        </>
    );
};
