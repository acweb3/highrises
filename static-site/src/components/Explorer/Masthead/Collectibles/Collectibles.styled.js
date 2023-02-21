import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

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
    margin-top: 16px;
    padding: 0 32px 32px;

    ${(props) =>
        props.isHeaderShowing &&
        css`
            text-indent: 1rem;
        `}

    ${(props) => props.theme.breakpoints.small`
        margin-top: 32px;
    `}
`;

export const CollectiblesHeader = styled.div`
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};
    text-align: center;

    padding: 0 32px;

    display: none;

    ${(props) =>
        props.isHeaderShowing &&
        css`
            display: block;
        `}
`;

export const Collectibles = styled.div`
    padding: 0;

    ${(props) => props.theme.breakpoints.small`
        padding: 32px 0 0;
    `}
`;
