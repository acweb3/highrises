import { Sky as UnstyledSky } from 'components/Sky';
import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Sky = styled(UnstyledSky)`
    width: auto;
    height: 100%;
`;

export const Title = styled(Header)`
    margin-left: auto;
`;

export const Points = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;

    margin-top: 88px;
`;

export const RoadmapChart = styled.div`
    z-index: 2;
    padding: 72px 48px 88px;
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
    overflow: hidden;
`;

export const Roadmap = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    flex-direction: row;
`;
