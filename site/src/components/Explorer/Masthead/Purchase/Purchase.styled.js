import styled from 'styled-components';

export const Purchase = styled.div`
    display: flex;
    max-width: 880px;
    margin: 32px auto 32px;

    ${(props) => props.theme.breakpoints.mobile`
        margin: 16px auto 0;
        justify-content: center;
    `}

    ${(props) => props.theme.breakpoints.medium`
        justify-content: initial;
    `}
`;
