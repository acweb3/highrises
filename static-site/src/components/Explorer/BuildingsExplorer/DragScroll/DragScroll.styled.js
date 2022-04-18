import styled from 'styled-components';

export const DragScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    cursor: pointer !important;

    min-height: 198px;

    &::-webkit-scrollbar {
        display: none;
    }

    /* ${(props) => props.theme.breakpoints.small`
        min-height: 420px;
    `} */
`;
