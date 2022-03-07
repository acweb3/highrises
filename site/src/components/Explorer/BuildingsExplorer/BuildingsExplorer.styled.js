import styled from 'styled-components';

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
