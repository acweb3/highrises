import styled from 'styled-components';

export const Header = styled.div`
    font-family: 'R&C-BasicFull';
    font-size: 32px;
    line-height: 3rem;
    color: ${(props) => props.theme.colors.blue[0]};
    text-transform: uppercase;

    ${(props) => props.theme.breakpoints.small`
        font-size: 48px;
        line-height: 4rem;
    `}
`;
