import styled, { css } from 'styled-components';

export const baseButtonCss = css`
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;

    border-radius: 3px;
    padding: 12px 12px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[2]};

    transition: opacity 0.1s linear;

    width: 100%;
    text-align: center;

    &:focus,
    &:hover {
        opacity: 0.8;
    }

    ${(props) => props.theme.breakpoints.mobile`
        width: 200px;
        padding: 8px 36px;
        white-space: nowrap;
        text-align: center;
    `}
`;

export const BaseButton = styled.div`
    ${baseButtonCss}
`;

export const ExternalButton = styled(BaseButton)`
    margin-top: 16px;
    width: 100%;

    min-width: min-content;

    ${(props) => props.theme.breakpoints.extraSmall`width: 304px;`}
    ${(props) => props.theme.breakpoints.medium`width: 160px;`}
    ${(props) => props.theme.breakpoints.large`width: 304px;`}
`;

export const ExternalButtonLink = styled.a`
    text-decoration: none;
`;
