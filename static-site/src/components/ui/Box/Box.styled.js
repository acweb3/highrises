import styled, { css } from 'styled-components';

export const Box = styled.div`
    display: flex;
    max-width: 1324px;
    margin: 0 auto;

    ${(props) =>
        props.isColumn &&
        css`
            flex-direction: column;
        `}
`;
