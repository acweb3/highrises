import styled from 'styled-components';

export const Paragraph = styled.p`
    text-indent: 1.5rem;
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
`;
