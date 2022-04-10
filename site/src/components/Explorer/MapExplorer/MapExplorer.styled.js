import styled from 'styled-components';

export const MapExplorerSticky = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    height: 100vh;
    width: 100vw;

    ${(props) => props.theme.breakpoints.medium`
        height: calc(100vh - 64px);
        width: auto;

        position: sticky;
        top: 32px;
        margin: 32px;

        box-shadow: ${(props) => props.theme.shadows.medium};
        border-radius: 8px;

        &::-webkit-scrollbar {
            display: none;
        }
    `}
`;

export const MapExplorer = styled.div`
    flex: 1;
`;
