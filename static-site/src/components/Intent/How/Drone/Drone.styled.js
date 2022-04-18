import { ViewScroll } from 'components/ui/ViewScroll';
import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
    0%, 100% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(3px);
    }
`;

export const Drone = styled.img``;

export const DroneDropin = styled(ViewScroll)``;

export const DroneSticky = styled.div`
    position: sticky;
    top: 4rem;
`;

export const DroneRelative = styled.div`
    animation: ${wobble} 1s ease infinite;

    position: relative;
    height: 100%;
`;

export const DroneContainer = styled(ViewScroll)`
    position: absolute;

    z-index: 2;

    top: -30px;
    right: -30px;
    width: 220px;

    ${(props) => props.theme.breakpoints.small`
        top: -400px;
        left: 20%;
        width: 250px;
        height: calc(50% + 450px);
    `}

    ${(props) => props.theme.breakpoints.large`
        left: 25%;
    `}
`;
