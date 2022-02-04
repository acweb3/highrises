import seamlessBackgroundSrc from 'assets/images/seamless-background.webp';
import styled from 'styled-components';

export const DesktopExplorerBackground = styled.div`
    position: absolute;
    bottom: 80px;
    max-width: initial;
    z-index: 0;
    transition: transform 800ms;
    height: 100%;

    background-image: url(${seamlessBackgroundSrc});
    background-repeat: repeat-x;
    background-size: auto 100%;

    width: 300%;
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
