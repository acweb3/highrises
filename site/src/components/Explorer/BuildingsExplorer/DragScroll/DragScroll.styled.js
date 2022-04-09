import styled from 'styled-components';

export const DragScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    cursor: pointer !important;

    &::-webkit-scrollbar {
        display: none;
    }
`;
