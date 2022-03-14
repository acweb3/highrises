import { Sky as UnstyledSky } from 'components/Sky';
import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Sky = styled(UnstyledSky)`
    width: 100%;
    height: 100%;
`;

export const Title = styled(Header)`
    margin-left: auto;
    white-space: nowrap;
`;

export const Points = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;

    margin-top: 88px;
`;

export const RoadmapChart = styled.div`
    z-index: 2;
    padding: 96px 48px 112px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
`;

export const RoadmapImage = styled.img`
    height: 100%;
    min-width: fit-content;
`;

export const RoadmapImageWrapper = styled.div`
    /* width: 50%; */
    z-index: 2;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
`;

export const Roadmap = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;
