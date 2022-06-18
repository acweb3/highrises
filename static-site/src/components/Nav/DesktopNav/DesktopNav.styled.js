import ShoppingCartIcon from 'assets/icons/shopping-cart.svg';
import styled from 'styled-components';

export const DesktopNav = styled.div`
    background: ${(props) => props.theme.colors.white[0]};

    flex-direction: row;
    justify-content: space-between;

    display: none;

    ${(props) => props.theme.breakpoints.mobile`
        display: flex;

        height: 216.06px;
        padding: 43px 5.5px;
    `}

    ${(props) => props.theme.breakpoints.small`
        height: 207.96px;
        padding: 43px 21.5px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        padding: 43px 33.5px;
        height: 226.85px;
    `}

    ${(props) => props.theme.breakpoints.large`
        padding: 43px 56.5px;
        height: 245.64px;
    `}
`;

export const Logo = styled.img`
    max-width: 152.72px;

    ${(props) => props.theme.breakpoints.extraSmall`
        max-width: 214px;
    `}

    ${(props) => props.theme.breakpoints.small`
        max-width: 259px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        max-width: 274px;
    `}

    ${(props) => props.theme.breakpoints.large`
        max-width: 274px;
    `}
`;

export const LogoWrapper = styled.a`
    height: 100%;
    padding: 24px 14.5px;

    display: flex;
    align-items: center;

    ${(props) => props.theme.breakpoints.medium`
        padding: 24px 48px;
    `}

    ${(props) => props.theme.breakpoints.large`
        display: block;
        padding: 24px 14.5px;
    `}
`;

export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    align-items: center;
    justify-content: end;

    ${(props) => props.theme.breakpoints.medium`
        padding: 24px 0 40px 14.5px;
    `}
`;

export const CartIcon = styled(ShoppingCartIcon)`
    white-space: nowrap;
    fill: #b0b0b0;
    stroke: #b0b0b0;
    stroke-width: 2px;
    width: 31px;
    min-width: 31px;
`;

export const CartLink = styled.a`
    padding: 24px 8.5px;
    margin-right: 24px;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
