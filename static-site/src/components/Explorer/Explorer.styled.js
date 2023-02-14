import gridSrc from 'assets/images/blue-graph-paper.jpg';
import styled from 'styled-components';

export const MobileExplorer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
`;

export const DesktopExplorerSideBar = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-height: 100vh;
`;

export const DesktopExplorerBuildings = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    background-image: url(${gridSrc});
`;

export const DesktopExplorerSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DesktopExplorer = styled.div`
    display: flex;

    position: relative;

    height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.colors.white[0]};

    & > ${DesktopExplorerSection} {
        &:nth-child(1),
        &:nth-child(3) {
            flex: 1 0 0;
        }
    }
`;
