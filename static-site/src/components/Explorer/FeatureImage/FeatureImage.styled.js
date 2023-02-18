import UnstyledClose from 'assets/icons/close.svg';
import UnstyledPinch from 'assets/icons/pinch.svg';
import { BuildingBadge } from 'components/BuildingBadge/BuildingBadge.styled';
import { BaseButton } from 'components/ui/BaseButton';
import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`{
    0% { transform: scale(1)}
    20% { transform: scale(1.2)}
    100% { transform: scale(1)}
  }`;

export const FeatureImageInstructionsPinch = styled(UnstyledPinch)`
    width: 32px;
    height: 32px;
`;

export const isShowingCss = css`
    opacity: 0;
    transition: opacity 400ms;

    ${(props) =>
        props.isShowing &&
        css`
            opacity: 1;
        `}
`;

export const FeatureImageInstructions = styled.div`
    position: fixed;
    left: 32px;

    width: 88px;
    height: 88px;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    line-height: 1;

    z-index: 3;
    background-color: ${(props) => props.theme.colors.blue[0]};
    color: ${(props) => props.theme.colors.white[0]};

    box-shadow: ${(props) => props.theme.shadows.high};

    animation: ${pulse} 3s linear infinite;

    ${isShowingCss}

    ${(props) => props.theme.breakpoints.small`
        position: absolute;
        top: initial;
        bottom: 48px;
    `}
    
    ${(props) =>
        props.zoomWrapperHeight &&
        css`
            top: ${props.zoomWrapperHeight - 136}px;
        `}
`;

export const FeatureImageFilterClose = styled(UnstyledClose)`
    & polygon {
        fill: white;
    }
`;

export const FeatureImageFilterCloseWrapper = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    border: 1px solid white;
`;

export const FeatureImageFilterButton = styled(BaseButton)`
    width: min-content;
    padding: 4px 16px;

    transition: color 400ms, background-color 400ms;

    &:focus,
    &:hover {
        opacity: 1;
    }

    ${(props) =>
        props.isSelecting &&
        css`
            opacity: 0.6;

            &:focus,
            &:hover {
                opacity: 0.6;
            }
        `}

    ${(props) =>
        props.isActive &&
        css`
            background-color: ${props.theme.colors.white[0]};
            color: ${props.theme.colors.blue[0]};
        `}
`;

const filterCss = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin-top: -8px;

    & > ${FeatureImageFilterCloseWrapper}, & > ${FeatureImageFilterButton} {
        margin: 8px 8px 0 0;
    }
`;

export const FeatureImageSubFilters = styled.div`
    ${filterCss}
    margin-top: 0;
`;

export const FeatureImageFilters = styled.div`
    ${filterCss}
`;

export const FeatureImageActions = styled.div`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 16px;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const FeatureImageBadge = styled(BuildingBadge)`
    position: fixed;
    box-shadow: ${(props) => props.theme.shadows.medium};

    ${isShowingCss}

    ${(props) =>
        props.zoomWrapperHeight &&
        css`
            top: ${props.zoomWrapperHeight - 40}px;
        `}

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
