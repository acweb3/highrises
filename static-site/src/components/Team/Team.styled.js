import UnstyledInstagramLogo from 'assets/icons/logo--instagram.svg';
import UnstyledTwitterLogo from 'assets/icons/logo--twitter.svg';
import UnstyledWebIcon from 'assets/icons/wikis.svg';
import styled, { css } from 'styled-components';

export const InstagramLogo = styled(UnstyledInstagramLogo)`
    fill: ${(props) => props.theme.colors.blue[0]};
`;

export const TwitterLogo = styled(UnstyledTwitterLogo)`
    fill: ${(props) => props.theme.colors.blue[0]};
    width: 36px;
    height: 36px;

    & path {
        fill: ${(props) => props.theme.colors.blue[0]};
    }
`;

export const WebIcon = styled(UnstyledWebIcon)`
    fill: ${(props) => props.theme.colors.blue[0]};
    width: 22px;
    height: 22px;
    margin-right: -4px;

    & path {
        fill: ${(props) => props.theme.colors.blue[0]};
    }
`;

export const SocialIcon = styled.a`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    opacity: 0.8;

    position: relative;

    &:hover {
        opacity: 1;
    }

    & rect {
        fill: none;
    }

    ${(props) =>
        props.isInactive &&
        css`
            opacity: 1;
            cursor: default;

            & svg {
                color: #ffffffa0;
                fill: #ffffff0f;
            }

            &::after {
                content: 'SOON';
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 8px;
                background: #f00;
                color: #fff;
                font-size: 8px;
                padding: 2px 4px;
            }
        `}
`;

export const Profiles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    justify-items: center;

    margin-top: 40px;

    ${(props) => props.theme.breakpoints.mobile`
        grid-template-columns: 300px 300px;
    `}

    ${(props) => props.theme.breakpoints.extraSmall`
        grid-template-columns: 350px 350px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        grid-template-columns: 450px 450px;
    `}

    ${(props) => props.theme.breakpoints.large`
        grid-row-gap: 48px;
    `}
`;

export const Team = styled.div`
    background: ${(props) => props.theme.colors.white[0]};

    padding: 72px 0 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;
