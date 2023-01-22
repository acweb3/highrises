import styled from 'styled-components';

export const DesktopExplorerBuildings = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;

    display: flex;
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
