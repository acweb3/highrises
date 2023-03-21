import styled, { css } from 'styled-components';

export const baseButtonCss = css``;

export const BaseButton = styled.div`
    user-select: none;

    font-family: ${(props) => props.theme.typography.fontFamily.karla};

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;

    border-radius: 24px;
    padding: 4px 4px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[2]};

    transition: opacity 0.1s linear;

    width: 100%;
    text-align: center;

    white-space: nowrap;

    &:focus,
    &:hover {
        opacity: 0.8;
    }

    ${(props) =>
        props.isActive &&
        css`
            opacity: 0.8;
        `}

    ${(props) => props.theme.breakpoints.small`
        width: 200px;
        padding: 8px 36px;
        white-space: nowrap;
        text-align: center;
    `}

    ${(props) => props.theme.breakpoints.XL`
        font-size: 1.5rem;
        width: min-content;
        padding: 8px 36px;
        white-space: nowrap;
        text-align: center;
    `}

    ${(props) =>
        props.disabled &&
        `
        pointer-events: none;
        cursor: default;
        opacity: 0.8;
        background: ${props.theme.colors.grey[1]};
    `}
`;
