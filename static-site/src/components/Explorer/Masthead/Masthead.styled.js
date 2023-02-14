import styled, { css } from 'styled-components';

export const MobileMastheadScrollMore = styled.div`
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

export const MobileMastheadSection = styled.div`
    padding: 0 32px;
`;

export const MobileReadMore = styled.div`
    background: ${(props) => props.theme.colors.white[0]};
    padding: 4px 12px;
    border-radius: 8px 8px 0 0;
    width: min-content;
    white-space: nowrap;

    margin: 0 auto;
`;

export const MobileMastheadContent = styled.div`
    max-height: 0;
    overflow: hidden;

    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};

    ${(props) =>
        props.isMastheadShowing &&
        css`
            max-height: 75%;
            padding: 16px 0 32px;
            overflow-x: hidden;
            overflow-y: scroll;
        `}
`;

export const MobileMasthead = styled.div`
    position: absolute;
    bottom: 0;

    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;

    max-height: 75%;
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
