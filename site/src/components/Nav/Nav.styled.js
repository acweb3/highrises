import { ReactComponent as ShoppingCartIcon } from 'assets/icons/shopping-cart.svg';
import styled from 'styled-components';

export const Nav = styled.div`
    height: 245.64px;
    padding: 43px 56.5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 100%;
`;

export const LogoWrapper = styled.a`
    height: 100%;
    padding: 24px 14.5px;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 24px 14.5px;
`;

export const Link = styled.a`
    margin: 0 1.12em;
    padding: 0.618em 0;

    font-family: poppins;
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    letter-spacing: -0.02em;
    text-transform: lowercase;

    color: ${(props) => props.theme.colors.grey[1]};

    text-decoration: none;
    transition: color 170ms ease-in-out;

    &:active,
    &:hover {
        color: #000;
    }
`;

export const CartIcon = styled(ShoppingCartIcon)`
    white-space: nowrap;
    line-height: 1em;
    fill: #b0b0b0;
    stroke: #b0b0b0;
    stroke-width: 2px;
    width: 31px;
`;

export const CartLink = styled.a`
    padding: 24px 14.5px;
`;
