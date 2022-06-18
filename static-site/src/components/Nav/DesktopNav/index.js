import logoSrc from 'assets/images/logos/hytha-logo.png';
import * as S from 'components/Nav/DesktopNav/DesktopNav.styled';
import { BaseLink } from 'components/ui/BaseLink';

export const LINKS = [
    { text: 'About Me', href: 'https://www.hythacg.com/aboutme' },
    { text: 'Rowhomes', href: 'https://www.hythacg.com/rowhomes' },
    {
        text: 'Highrises',
        href: '#',
        isActive: true,
    },
    { text: 'Prints', href: 'https://www.hythacg.com/print-shop' },
    {
        text: 'Architecture',
        href: 'https://www.hythacg.com/center-square-station-2',
    },
    { text: 'Bike blog', href: 'https://www.hythacg.com/bike-the-usa' },
];

export const DesktopNav = () => {
    return (
        <S.DesktopNav>
            <S.LogoWrapper href="https://www.hythacg.com">
                <S.Logo alt="logo" src={logoSrc} />
            </S.LogoWrapper>

            <S.Navigation>
                <S.Links>
                    {LINKS.map(({ text, href, isActive }) => (
                        <BaseLink.A isActive={isActive} key={href} href={href}>
                            {text}
                        </BaseLink.A>
                    ))}
                </S.Links>

                <S.Links>
                    <S.CartLink href="https://www.hythacg.com/cart">
                        <S.CartIcon />
                    </S.CartLink>
                </S.Links>
            </S.Navigation>
        </S.DesktopNav>
    );
};
