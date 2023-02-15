import { BuildingBadge } from 'components/BuildingBadge/BuildingBadge.styled';
import { BaseButton } from 'components/ui/BaseButton';
import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

export const FeatureImageFilterButton = styled(BaseButton)`
    width: min-content;
    padding: 4px 16px;

    transition: color 400ms, background-color 400ms;

    ${(props) =>
        props.isActive &&
        css`
            background-color: ${props.theme.colors.white[0]};
            color: ${props.theme.colors.blue[0]};
        `}
`;

export const FeatureImageFilters = styled.div`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 16px;
`;

export const FeatureImageBadge = styled(BuildingBadge)`
    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const FeatureImage = styled(BlurLoader)`
    & > img {
        max-width: none;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const FeatureImageRandom = styled(FeatureImage)`
    transition: opacity 1000ms;

    opacity: 0;
    z-index: 2;

    position: absolute;

    ${(props) =>
        props.isActive &&
        css`
            opacity: 1;
        `}
`;

export const FeatureImageRandomContainer = styled.div`
    padding-bottom: 150%;
`;

export const FeatureImageZoom = styled.div`
    & * {
        &:focus {
            outline: none;
        }
    }

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${(props) => props.theme.breakpoints.small`
        position: relative;
        height: 100vh;
    `}
`;

export const FeatureImageZoomWrapper = styled.div`
    position: relative;

    padding-bottom: 150%;

    ${(props) => props.theme.breakpoints.small`
        padding-bottom: initial;
    `}
`;

export const FeatureImageWrapper = styled.div`
    position: relative;
    overflow: hidden;

    ${(props) => props.theme.breakpoints.small`
        padding-bottom: initial;
    `}
`;
