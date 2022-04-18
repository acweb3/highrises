import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)`
    ${(props) => props.theme.breakpoints.small`
        white-space: nowrap;
        text-align: initial;
        margin-left: auto;
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

    ${(props) => props.theme.breakpoints.medium`
        margin-right: 88px;
    `}
`;

export const RoadmapChart = styled.div`
    z-index: 2;
    padding: 72px 32px 112px;
    display: flex;
    flex-direction: column;

    ${(props) => props.theme.breakpoints.small`
        padding: 96px 96px 112px;
        margin-left: auto;
    `}
`;

export const RoadmapVideo = styled.video`
    position: absolute;
    width: 530px;
    top: 1068px;
    left: 27px;
`;

export const RoadmapImage = styled.img`
    height: 100%;
    min-width: fit-content;
`;

export const RoadmapImageWrapper = styled.div`
    position: absolute;
    z-index: 2;
    height: 1800px;
    top: 0;
    left: -25%;

    display: none;

    ${(props) => props.theme.breakpoints.small`
        display: block;
        left: -55%;
    `}

    ${(props) => props.theme.breakpoints.medium`
        left: -35%;
    `}

    ${(props) => props.theme.breakpoints.large`
        left: -15%;
    `}

    ${(props) => props.theme.breakpoints.extraLarge`
        left: -5%;
    `}
`;

export const Roadmap = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;
