import styled from 'styled-components';

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

    & > ${DesktopExplorerSection} {
        &:nth-child(1) {
            width: 27vw;
            min-width: 27vw;
        }

        &:nth-child(2) {
            width: 38vw;
            min-width: 38vw;
            background: ${(props) => props.theme.colors.grey[1]};
        }

        &:nth-child(3) {
            width: 35vw;
            min-width: 35vw;
            position: relative;
            border-left: 1px solid ${(props) => props.theme.colors.grey[0]};
        }
    }
`;
