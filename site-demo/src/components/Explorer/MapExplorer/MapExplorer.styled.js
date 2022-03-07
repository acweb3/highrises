import styled from 'styled-components';

export const MapExplorer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    min-height: 700px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
