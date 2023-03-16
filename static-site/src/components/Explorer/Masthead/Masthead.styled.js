import UnstyledClose from 'assets/icons/close.svg';
import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const MobileEmailCollectionWrapper = styled.div`
    margin-top: 32px;
`;

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
    position: relative;

    color: ${(props) => props.theme.colors.grey[0]};
    background: ${(props) => props.theme.colors.white[0]};
    padding: 0 12px;
    border-radius: 8px 8px 0 0;
    width: min-content;
    white-space: nowrap;

    margin: 0 auto;

    &::after {
        content: ' ';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${(props) => props.theme.colors.white[0]};
    }
`;

export const MobileMastheadContent = styled.div`
    max-height: 0;

    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};

    transition: max-height 400ms;

    ${(props) =>
        props.isMobilePopoverOpen &&
        css`
            height: 75%;
            max-height: 2999px;
            padding: 16px 0 0;
            overflow-x: hidden;
        `}
`;

export const MobileMastheadShadowWrapper = styled.div`
    position: relative;
    overflow: scroll;

    border-radius: 16px 16px 0 0;

    position: relative;
`;

export const MobileMastheadShadow = styled.div`
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

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
    bottom: ${(props) => props.buildingExplorerHeight}px;

    z-index: 4;

    display: flex;
    flex-direction: column;
    justify-content: center;

    max-height: 60%;
`;

export const DesktopMastheadClose = styled(UnstyledClose)`
    width: 24px;
    height: 24px;

    ${(props) => props.theme.breakpoints.XL`
        width: 48px;
        height: 48px;
    `}
`;

export const DesktopMastheadCloseButton = styled.div`
    position: absolute;
    top: 8px;
    right: 16px;

    cursor: pointer;
    padding: 8px;

    ${(props) => props.theme.breakpoints.XL`
        top: 16px;
        right: 32px;
    `}
`;

export const DesktopMastheadEmailCollectionWrapper = styled.div`
    margin-top: 32px;
`;

export const DesktopMastheadNav = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0 32px;

    ${(props) => props.theme.breakpoints.XL`
        margin: 32px 0;
    `}
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
    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props) => props.theme.breakpoints.medium`
        ${
            props.isDescription &&
            css`
                margin-bottom: auto;
            `
        }
    `}

    ${(props) => props.theme.breakpoints.XL`
        padding: 0 64px;
    `}
`;

export const DesktopMasthead = styled.div`
    position: relative;

    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 16px 0 0;

    min-width: 300px;

    min-height: calc(66vh - 32px);

    ${(props) => props.theme.breakpoints.XL`
        font-size: 2rem;
        line-height: 1.1;

        padding: 48px 0 0;
    `}
`;
