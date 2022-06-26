import styled from 'styled-components';

export const DesktopExplorerBackground = styled.img`
    position: absolute;
    bottom: 120px;
    height: 100%;
    max-width: initial;
    z-index: 0;
    transition: transform 800ms;
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

    ${(props) => props.theme.breakpoints.extraSmall`
        display: flex;
    `}
`;
