import styled from 'styled-components';

export const MobileExplorerBackground = styled.img`
    position: absolute;
    bottom: 0px;
    height: 100%;
    max-width: initial;
    z-index: 0;
`;

export const MobileExplorerSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const MobileExplorer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;

    position: sticky;
    top: 0;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;
