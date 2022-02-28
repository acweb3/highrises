import styled from 'styled-components';

export const Countdown = styled.div`
    height: 64px;
    padding: 0 88px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.white[0]};
    background: ${(props) => props.theme.colors.blue[0]};
`;
