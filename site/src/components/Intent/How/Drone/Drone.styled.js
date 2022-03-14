import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const Drone = styled.img``;

export const DroneDropin = styled(ViewScroll)``;

export const DroneSticky = styled.div`
    position: sticky;
    top: 4rem;
`;

export const DroneRelative = styled.div`
    position: relative;
    height: 100%;
`;

export const DroneContainer = styled(ViewScroll)`
    position: absolute;
    top: -400px;
    left: 250px;
    width: 250px;
    height: calc(50% + 450px);
    z-index: 2;
`;
