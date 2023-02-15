import { BuildingBadge } from 'components/BuildingBadge/BuildingBadge.styled';
import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

// lol
export const BuildingBuildingBadge = styled(BuildingBadge)`
    display: none;

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;

export const BuildingImage = styled(BlurLoader)`
    & > img {
        height: 100%;
        width: auto;
    }

    ${(props) => props.theme.breakpoints.small`
        & > img {
            height: initial;
            width: initial;
        }
    `}
`;

export const BuildingCaption = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;

    height: 100%;
    width: 100%;

    z-index: 1;

    opacity: 0;
    transition: opacity 400ms;

    &::before {
        content: ' ';
        position: absolute;
        background: ${(props) => props.theme.colors.white[0]};
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 400ms;
    }

    &:hover {
        opacity: 1;

        &::before {
            opacity: 0.75;
        }
    }

    display: none;

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;

export const BuildingIndex = styled.div`
    font-size: 1.175rem;
    font-weight: 800;
    user-select: none;
    text-align: center;
    padding: 0 4px;
`;

export const BuildingName = styled.div`
    font-size: 1rem;
    text-align: center;
    text-align: center;
`;

export const BuildingAspectRatio = styled.div`
    height: 100%;

    ${(props) => props.theme.breakpoints.small`
        height: 0;
        padding-bottom: 150%;
    `}
`;

export const Building = styled.div`
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: max-content;

    cursor: pointer;

    position: relative;

    ${(props) =>
        props.isActive &&
        css`
            &::after {
                content: ' ';
                position: absolute;
                width: 100%;
                height: 100%;

                border: 2px solid ${(props) => props.theme.colors.white[0]};
                border-top: none;
            }
        `}

    ${(props) => props.theme.breakpoints.small`
        flex: 1;
        height: initial;
        width: initial;

        ${
            props.isActive &&
            css`
                &::after {
                    border-top: 2px solid
                        ${(props) => props.theme.colors.white[0]};
                }
            `
        }}
    `}
`;
