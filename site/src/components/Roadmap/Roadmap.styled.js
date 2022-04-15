import { Sky as UnstyledSky } from 'components/Sky';
import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Sky = styled(UnstyledSky)`
    width: 100%;
    height: 100%;
`;

export const Title = styled(Header)`
    margin-left: auto;

    ${(props) => props.theme.breakpoints.small`
        text-align: initial;
        white-space: nowrap;
    `}
`;

export const Points = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    ${(props) => props.theme.breakpoints.mobile`
        margin-left: auto;
        margin-top: 88px;
    `}
`;

export const RoadmapChart = styled.div`
    z-index: 2;
    padding: 72px 32px 112px;
    display: flex;
    flex-direction: column;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 96px 96px 112px;
        margin-left: auto;
    `}
`;

export const RoadmapVideo = styled.video`
    position: absolute;
    width: 449px;
    top: 672px;
    left: 22px;
`;

export const RoadmapImage = styled.img`
    height: 100%;
    min-width: fit-content;
`;

export const RoadmapImageWrapper = styled.div`
    z-index: 2;
    position: absolute;
    height: 100%;
    top: 0;
    left: -45%;

    display: none;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}

    ${(props) => props.theme.breakpoints.medium`
        left: -25%;
    `}

    ${(props) => props.theme.breakpoints.large`
        left: 0;
    `}
`;

export const Roadmap = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;
