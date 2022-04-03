import styled from 'styled-components';

export const CountdownCounter = styled.div`
    transition: opacity 0.4s;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    white-space: nowrap;
`;

export const Countdown = styled.div`
    height: 64px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white[0]};
    background: ${(props) => props.theme.colors.blue[0]};

    ${(props) => props.theme.breakpoints.mobile`
        justify-content: normal;
        padding: 0 88px;
    `};
`;
