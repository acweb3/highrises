import logoSrc from 'assets/images/logos/hytha-logo.png';
import * as S from 'components/Nav/MobileNav/MobileNav.styled';

export const MobileNav = () => {
    return (
        <>
            <S.InitOffset />
            <S.MobileNav>
                <S.MobileNavCart>Cart</S.MobileNavCart>
                <S.MobileNavLogoContainer>
                    <S.MobileNavLogo src={logoSrc} />
                </S.MobileNavLogoContainer>
                <S.MobileNavMenu>{/* <S.Hamburger /> */}</S.MobileNavMenu>
            </S.MobileNav>
        </>
    );
};
