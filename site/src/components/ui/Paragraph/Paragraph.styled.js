import styled from 'styled-components';

export const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.blue[0]};
    font-family: poppins;
    margin-bottom: 16px;
    font-weight: 500;

    & > b {
        font-family: poppins;
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    ${(props) => props.theme.breakpoints.small`
        text-indent: 1.5rem;
    `}
`;
