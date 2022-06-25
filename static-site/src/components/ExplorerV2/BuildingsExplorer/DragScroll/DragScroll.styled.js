import styled from 'styled-components';

export const DragScrollContent = styled.div`
    display: flex;
    flex-direction: row;
    overflow: visible;

    cursor: pointer !important;

    transition: transform 500ms ease;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DragScroll = styled.div`
    width: 100%;
    overflow: hidden;
`;
