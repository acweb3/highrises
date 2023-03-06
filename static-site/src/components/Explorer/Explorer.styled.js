import gridSrc from 'assets/images/blue-graph-paper.jpg';
import styled, { css } from 'styled-components';

export const MobileExplorerPopover = styled.div``;

export const MobileExplorer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
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

    position: relative;

    ${(props) => props.theme.breakpoints.large`
        ${
            props.isMasthead &&
            css`
                min-width: 364px;
                max-width: 480px;
            `
        }
    `}

    ${(props) => props.theme.breakpoints.XL`
        ${
            props.isMasthead &&
            css`
                min-width: 648px;
                max-width: 880px;
            `
        }
    `}

    ${(props) => props.theme.breakpoints.XXL`
        ${
            props.isMasthead &&
            css`
                min-width: 648px;
                max-width: 880px;
            `
        }
    `}
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
