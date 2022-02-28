import logoSrc from 'assets/images/logos/hytha-logo.png';
import * as S from 'components/Nav/Nav.styled';

export const LINKS = [
    { text: 'About Me', href: 'https://www.hythacg.com/aboutme' },
    { text: 'Rowhomes', href: 'https://www.hythacg.com/rowhomes' },
    { text: 'Prints', href: 'https://www.hythacg.com/print-shop' },
    {
        text: 'Architecture',
        href: 'https://www.hythacg.com/center-square-station-2',
    },
    { text: 'Bike blog', href: 'https://www.hythacg.com/bike-the-usa' },
];

export const Nav = ({ children }) => {
    return (
        <S.Nav>
            <S.LogoWrapper href="https://www.hythacg.com">
                <S.Logo alt="logo" src={logoSrc} />
            </S.LogoWrapper>

            <S.Links>
                {LINKS.map(({ text, href }) => (
                    <S.Link key={href} href={href}>
                        {text}
                    </S.Link>
                ))}

                <S.CartLink href="https://www.hythacg.com/cart">
                    <S.CartIcon />
                </S.CartLink>
            </S.Links>
        </S.Nav>
    );
};
