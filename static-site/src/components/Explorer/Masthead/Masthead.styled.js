import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const MobileMastheadButton = styled(BaseButton)`
    width: min-content;
    padding: 4px 16px;

    opacity: 0.6;

    &:focus,
    &:hover {
        opacity: 1;
    }

    ${(props) =>
        props.isActive &&
        css`
            opacity: 1;
        `}
`;

export const MobileMastheadNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 16px 0 32px;

    & * {
        &:first-of-type {
            margin-right: 8px;
        }
    }
`;

export const MobileMastheadSection = styled.div`
    padding: 0 16px;
`;

export const MobileReadMore = styled.div`
    color: ${(props) => props.theme.colors.grey[0]};
    background: ${(props) => props.theme.colors.white[0]};
    padding: 0 12px;
    border-radius: 8px 8px 0 0;
    width: min-content;
    white-space: nowrap;

    margin: 0 auto -2px;
`;

export const MobileMastheadContent = styled.div`
    max-height: 0;
    overflow: hidden;

    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};

    transition: max-height 600ms;

    ${(props) =>
        props.isMobilePopoverOpen &&
        css`
            height: 75%;
            max-height: 500px;
            padding: 16px 0 32px;
            overflow-x: hidden;
            overflow-y: scroll;
        `}
`;

export const MobileMastheadShadow = styled.div`
    position: relative;
    overflow: hidden;

    border-radius: 16px 16px 0 0;

    &::before {
        z-index: 2;
        content: ' ';
        position: absolute;
        top: -2px;
        left: 0;
        width: 100%;
        height: 16px;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.8) 20%,
            rgba(255, 255, 255, 0.6) 40%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    &::after {
        z-index: 2;
        content: ' ';
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 16px;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.8) 20%,
            rgba(255, 255, 255, 0.6) 40%,
            rgba(255, 255, 255, 0) 100%
        );
    }
`;

export const MobileMasthead = styled.div`
    position: absolute;
    bottom: 0;

    z-index: 4;

    display: flex;
    flex-direction: column;
    justify-content: center;

    max-height: 75%;

    box-shadow: ${(props) => props.theme.shadows.high};
`;

export const DesktopMastheadNav = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0 32px;
`;

export const DesktopMastheadScrollMore = styled.div`
    position: absolute;
    left: 0;
    bottom: -100px;
    width: 100%;

    transition: opacity 400ms;
    opacity: ${(props) => (props.isShowing ? 1 : 0)};

    font-style: italic;

    white-space: nowrap;

    height: 180px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding: 144px;

    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 0.6) 80%,
        rgba(255, 255, 255, 0) 100%
    );
`;

export const DesktopMastheadSection = styled.div`
    padding: 0 32px;
`;

export const DesktopMasthead = styled.div`
    position: relative;

    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 16px 0 32px;
`;
