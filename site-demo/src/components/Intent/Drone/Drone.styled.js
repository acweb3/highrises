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
    transform: scale(0.8);
`;

export const DroneContainer = styled(ViewScroll)`
    position: absolute;
    top: 0;
    right: 500px;
    width: 250px;
    height: 100%;
    padding-top: 300px;
`;
