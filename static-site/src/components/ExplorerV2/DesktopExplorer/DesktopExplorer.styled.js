import styled from 'styled-components';

export const DesktopExplorerBackground = styled.img`
    position: absolute;
    bottom: 80px;
    max-width: initial;
    z-index: 0;
    transition: transform 800ms;
    height: 100%;

    ${(props) => props.theme.breakpoints.extraLarge`
        width: 166%;
    `}
`;

export const DesktopExplorerSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const DesktopExplorer = styled.div`
    width: 100vw;
    display: none;

    position: sticky;
    top: 0;

    background: ${(props) => props.theme.colors.white[0]};

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;
