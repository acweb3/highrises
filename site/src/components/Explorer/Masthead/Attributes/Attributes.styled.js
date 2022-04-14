import styled from 'styled-components';

export const Attributes = styled.div`
    display: flex;
    flex-direction: column-reverse;

    ${(props) => props.theme.breakpoints.mobile`
        flex-direction: row;
        
        & > div {
            &:first-of-type {
                margin-right: 32px;
            }
        }
    `}
`;
