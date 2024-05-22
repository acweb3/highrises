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

export const MobileMastheadSticky = styled.div`
    position: sticky;
    top: -1px; // some razzle dazzle to prevent 1px spillover
    background: #fff;
    z-index: 3;
    padding: 8px 0;

    border-bottom: 1px solid ${(props) => props.theme.colors.grey[1]};
    margin-bottom: 16px;
`;

export const MobileMastheadContent = styled.div`
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 16px 16px 0 0;

    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};
`;

export const MobileMasthead = styled.div`
    position: fixed;
    top: 60px;

    z-index: 4;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: calc(100vh - 60px);
    background: rgba(255, 255, 255, 0.8);

    padding-top: 48px;
`;

export const MastheadClose = styled(UnstyledClose)`
    width: 32px;
    height: 32px;

    color: ${(props) => props.theme.colors.grey[1]};

    ${(props) => props.theme.breakpoints.small`
        width: 48px;
        height: 48px;
    `}

    ${(props) => props.theme.breakpoints.XL`
        width: 48px;
        height: 48px;
    `}
`;

export const MastheadCloseButton = styled.div`
    position: absolute;
    top: 0px;
    right: 8px;

    cursor: pointer;
    padding: 8px;

    z-index: 999999;

    ${(props) => props.theme.breakpoints.XL`
        top: 8px;
        right: 16px;
    `}

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
