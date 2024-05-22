import gridSrc from 'assets/images/blue-graph-paper.jpg';
import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const BuildingsExplorerShop = styled(BaseButton)`
    display: none;

    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 2;
    padding: 8px 24px;
    width: min-content;
    border: 1px solid ${(props) => props.theme.colors.white[0]};

    opacity: 0.7;

    letter-spacing: initial;
    text-transform: none;
    border-radius: 24px;
    padding: 8px 24px;
    font-size: 1rem;

    &:hover {
        opacity: 1;
    }

    ${(props) => props.theme.breakpoints.large`
        display: block;
    `}
`;

export const BuildingsExplorerHeader = styled.div`
    text-align: center;
    width: 100%;

    font-weight: 600;
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${(props) => props.theme.typography.fontSize.h2};
    `}
`;

export const BuildingsExplorerOnboarding = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 3;

    opacity: ${(props) => (props.isActive ? 0.75 : 0)};
    transition: opacity 400ms;

    color: ${(props) => props.theme.colors.blue[0]};

    padding-bottom: 128px;
`;

export const BuildingsExplorerGrid = styled.div`
    ${(props) => css`
        display: grid;
        margin: 0;
        width: 100%;
        grid-template-columns: ${() => {
            if (props.count > 16) {
                return '1fr 1fr 1fr 1fr';
            }

            if (props.count > 8) {
                return '1fr 1fr 1fr';
            }

            return '1fr 1fr';
        }};
        height: min-content;
    `}

    ${(props) => props.theme.breakpoints.small`
        display: flex;
        margin: 0 auto;
        width: initial;
    `}

    ${(props) =>
        props.buildingExplorerHeight &&
        css`
            height: ${props.buildingExplorerHeight + 1}px;
        `}

    ${(props) => props.theme.breakpoints.large`
        display: grid;
        margin: 0;
        width: 100%;
        grid-template-columns: ${() => {
            if (props.count > 16) {
                return '1fr 1fr 1fr 1fr';
            }

            if (props.count > 8) {
                return '1fr 1fr 1fr';
            }

            return '1fr 1fr';
        }};
        height: min-content;
    `}
`;

export const BuildingsExplorer = styled.div`
    flex: 1;

    position: relative;

    display: flex;

    background-image: url(${gridSrc});

    margin-top: -88px;

    &::-webkit-scrollbar {
        display: none;
    }

    ${(props) =>
        props.buildingExplorerHeight &&
        css`
            position: fixed;
            bottom: 0;
            z-index: 5;
            width: 100%;
        `}

    ${(props) => props.theme.breakpoints.small`
        margin-top: 0;

        overflow-x: scroll;
        overflow-y: hidden;

        border-top: 2px solid ${(props) => props.theme.colors.white[0]};
    `}

    ${(props) => props.theme.breakpoints.large`
        position: relative;

        overflow-x: hidden;
        overflow-y: scroll;

        border: none;
    `};
`;
