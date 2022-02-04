import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const linkCss = css`
    margin: 0 1.12em;
    padding: 9.27px 0;

    font-family: poppins;
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    height: 33.53px;
    letter-spacing: -0.02em;
    text-transform: lowercase;

    color: ${(props) => props.theme.colors.grey[1]};

    text-decoration: none;
    transition: color 170ms ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.isActive &&
        `
        color: #000;
    `}

    &.active {
        color: #000;
    }

    &:active,
    &:hover {
        color: #000;
    }
`;

export const GatsbyLink = styled(Link)`
    ${linkCss}
`;
export const A = styled.a`
    ${linkCss}
`;
