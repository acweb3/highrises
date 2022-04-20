import styled from 'styled-components';

export const Countdown = styled.div`
    transition: opacity 0.4s;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    white-space: nowrap;
`;
