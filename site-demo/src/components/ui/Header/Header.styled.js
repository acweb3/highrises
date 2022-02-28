import styled from 'styled-components';

export const Header = styled.div`
    font-family: 'R&C-BasicFull';
    font-size: 48px;
    color: ${(props) => props.theme.colors.blue[0]};
    text-transform: uppercase;
    line-height: 4rem;
`;
