import { BlurLoader } from 'components/ui/BlurLoader';
import styled from 'styled-components';

export const FeatureImage = styled(BlurLoader)`
    & > img {
        max-width: none;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const FeatureImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
`;
