import styled from 'styled-components';

export const MapExplorerSticky = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    height: 33vh;

    position: sticky;
    top: 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MapExplorer = styled.div`
    flex: 1;
`;
