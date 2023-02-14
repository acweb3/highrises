import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

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

export const FeatureImageZoom = styled.div``;

export const FeatureImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
`;
