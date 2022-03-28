import { ReactComponent as UnstyledDiscordLogo } from 'assets/icons/logo--discord.svg';
import { ReactComponent as UnstyledInstagramLogo } from 'assets/icons/logo--instagram.svg';
import { ReactComponent as UnstyledOpenseaLogo } from 'assets/icons/logo--opensea.svg';
import { ReactComponent as UnstyledTwitterLogo } from 'assets/icons/logo--twitter.svg';
import styled, { css } from 'styled-components';

export const DiscordLogo = styled(UnstyledDiscordLogo)`
    fill: ${(props) => props.theme.colors.white[0]};
`;
export const InstagramLogo = styled(UnstyledInstagramLogo)`
    fill: ${(props) => props.theme.colors.white[0]};
`;
export const OpenseaLogo = styled(UnstyledOpenseaLogo)`
    color: ${(props) => props.theme.colors.white[0]};
    width: 24px;
`;
export const TwitterLogo = styled(UnstyledTwitterLogo)`
    fill: ${(props) => props.theme.colors.white[0]};
`;

export const ContextFABButton = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    opacity: 0.8;

    position: relative;

    &:hover {
        opacity: 1;
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

export const ContextFABLinks = styled.div`
    display: flex;
`;

export const ContextFAB = styled.div`
    color: ${(props) => props.theme.colors.white[0]};
    background: ${(props) => props.theme.colors.blue[0]};

    display: flex;

    position: fixed;
    top: 32px;
    left: 50%;
    transform: translate(-50%, 0);

    border-radius: 300px;
    padding: 8px 16px;

    z-index: 999;
`;
