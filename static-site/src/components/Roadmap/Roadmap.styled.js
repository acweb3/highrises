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

export const RoadmapImage = styled.img`
    height: 200vh;
    min-width: fit-content;
    transition: transform 400ms;
`;

export const RoadmapImageWrapper = styled.div`
    position: absolute;
    z-index: 2;
    height: 1800px;
    top: 0;
    left: -25%;

    height: 100vh;
    position: sticky;
    overflow: visible;
    overflow-y: hidden;

    display: none;

    ${(props) => props.theme.breakpoints.small`
        display: block;
        margin-left: -55%;
    `}

    ${(props) => props.theme.breakpoints.large`
        margin-left: -15%;
    `}

    ${(props) => props.theme.breakpoints.extraLarge`
        margin-left: 0%;
    `}
`;

export const Roadmap = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    flex-direction: row;
`;
