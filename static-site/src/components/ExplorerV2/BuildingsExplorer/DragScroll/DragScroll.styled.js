import styled from 'styled-components';

export const DragScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    cursor: pointer !important;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;
