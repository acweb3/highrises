import styled, { css } from 'styled-components';

export const Box = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;

    ${(props) =>
        props.isColumn &&
        css`
            flex-direction: column;
        `}
`;
