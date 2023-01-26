import { Nav } from 'components/Nav';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { Sky } from 'components/Sky';

export const SiteWrapper = ({ children }) => {
    return (
        <>
            <S.GlobalStyle />
            <Nav />
            <Sky />
            <S.SiteWrapper>{children}</S.SiteWrapper>
        </>
    );
};
