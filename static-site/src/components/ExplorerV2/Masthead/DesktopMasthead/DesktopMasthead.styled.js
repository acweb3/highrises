import { CloseButton } from 'components/CloseButton';
import { ExternalButtonLink } from 'components/ui/BaseButton';
import styled, { css, keyframes } from 'styled-components';

export const DesktopMastheadX = styled(CloseButton)`
    position: relative;
    box-shadow: none;
    background: transparent;
    margin-left: auto;
    margin-bottom: 16px;
    margin-top: -16px;

    bottom: initial;
    right: initial;
`;

export const DesktopMastheadExternalButtonLink = styled(ExternalButtonLink)`
    width: 100%;
    margin: 0 0 8px;

    text-align: center;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.blue[0]};
    color: ${(props) => props.theme.colors.white[0]};
    padding: 8px 0;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-8px);} 
   60% {transform: translateY(-10px);} 
`;

export const DesktopMastheadAlert = styled.div`
    font-style: italic;
    text-align: right;

    margin: 16px 0 0;

    ${(props) => props.theme.breakpoints.small`
        animation: ${bounce} 1s;
        animation-delay: 1s;
    `}
`;

export const DesktopMastheadImage = styled.img`
    margin: 16px auto 32px;
    width: 75%;
`;

export const DesktopMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    box-sizing: border-box;

    overflow-x: hidden;
    overflow-y: scroll;

    min-height: 100vh;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 16px 32px 196px;

    z-index: 2;

    position: fixed;
    top: 83.65px;
    right: 0;

    transform: translate3D(0, 100%, 0);

    transition: transform 400ms;

    ${(props) =>
        props.isActive &&
        css`
            transform: translate3D(0, 0, 0);
        `}

    ${(props) => props.theme.breakpoints.extraSmall`
        position: absolute;
        top: 0;
        right: 0;
        width: 33vw;
        max-width: 480px;
        background: rgba(255, 255, 255, 0.6);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(255, 255, 255, 0.8) calc(100% - 120px),
            rgba(255, 255, 255, 1) calc(100% - 119px)
        );
        padding: 48px 48px 168px;
        transform: translate3D(100%, 0, 0);

        ${
            props.isActive &&
            css`
                transform: translate3D(0, 0, 0);
            `
        }
    `}
`;
