import { BlurLoader } from 'components/ui/BlurLoader';
import styled from 'styled-components';

export const CollectibleImage = styled(BlurLoader)``;

export const CollectibleNFTOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    z-index: 2;
`;

export const CollectibleSquare = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    z-index: 1;
`;

export const Collectible = styled.a`
    position: relative;

    padding-bottom: 100%;
    overflow: hidden;
    height: 0;
`;

export const CollectiblesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const CollectiblesCopy = styled.div`
    text-indent: 1rem;
    margin-top: 32px;

    padding: 0 32px 32px;
`;

export const CollectiblesHeader = styled.div`
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};
    height: ${(props) => props.theme.typography.fontSize.h3};
    text-align: center;

    padding: 0 32px;
`;

export const Collectibles = styled.div`
    padding: 64px 0 0;
`;
