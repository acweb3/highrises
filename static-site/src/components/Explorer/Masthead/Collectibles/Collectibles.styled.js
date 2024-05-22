import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

export const CollectibleImage = styled(BlurLoader)`
    ${(props) => props.theme.breakpoints.large`
        & > img {
            height: initial;
            width: initial;
            width: 100%;
        }
    `}
`;

export const CollectibleNFTOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    z-index: 2;

    ${(props) =>
        props.isDesktop &&
        css`
            display: none;

            ${props.theme.breakpoints.small`
            display: block;
        `}
        `}

    ${(props) =>
        !props.isDesktop &&
        props.theme.breakpoints.small`
        display: none;
    `}
`;

export const CollectibleName = styled.div`
    display: flex;
    text-align: center;
    padding: 8px 8px 16px;
    align-self: center;
    line-height: 1.1;
    font-weight: 600;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const CollectibleWrapper = styled.a`
    display: flex;
    flex-direction: column;
`;

export const CollectibleSquare = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    z-index: 1;
`;

export const Collectible = styled.div`
    position: relative;

    padding-bottom: 100%;
    overflow: hidden;
    height: 0;
`;

export const CollectiblesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-column-gap: 16px;

    ${(props) => props.theme.breakpoints.small`
        grid-column-gap: 0;
    `}

    ${(props) => props.theme.breakpoints.XL`
        margin-top: 48px;
    `}
`;

export const CollectiblesCopy = styled.div`
    margin-top: 16px;
    padding: 0 16px 32px;

    ${(props) =>
        props.isHeaderShowing &&
        css`
            text-indent: 1rem;
        `}

    ${(props) => props.theme.breakpoints.small`
        margin-top: 32px;
    `}

    ${(props) => props.theme.breakpoints.XL`
        padding: 0 64px;

        ${(props) =>
            props.isHeaderShowing &&
            css`
                text-indent: 2rem;
            `}
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

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${(props) => props.theme.typography.fontSize.h2};
    `}
`;

export const Collectibles = styled.div`
    padding: 0;

    ${(props) => props.theme.breakpoints.small`
        padding: 32px 0 0;
    `}
`;
