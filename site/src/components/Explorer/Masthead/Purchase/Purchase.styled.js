import styled from 'styled-components';

export const Purchase = styled.div`
    display: flex;
    max-width: 880px;
    margin: 32px auto 32px;

    & > div {
        margin-left: -8px;
        &:first-of-type {
            margin-right: 24px;
        }
    }

    ${(props) => props.theme.breakpoints.mobile`
        margin: 16px auto 0;
        justify-content: center;

        & > div {
            margin-left: 0;
            &:first-of-type {
                margin-right: 32px;
            }
        }
    `}

    ${(props) => props.theme.breakpoints.medium`
        justify-content: initial;
    `}
`;
