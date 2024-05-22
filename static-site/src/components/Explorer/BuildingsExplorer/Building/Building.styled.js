import { BuildingBadge } from 'components/BuildingBadge/BuildingBadge.styled';
import { BlurLoader } from 'components/ui/BlurLoader';
import styled, { css } from 'styled-components';

// lol
export const BuildingBuildingBadge = styled(BuildingBadge)`
    display: none;

    ${(props) => props.theme.breakpoints.large`
        display: flex;
    `}
`;

export const BuildingImage = styled(BlurLoader)`
    & > img {
        width: auto;
    }

    ${(props) => props.theme.breakpoints.small`
        & > img {
            height: 100%;
        }
    `}

    ${(props) => props.theme.breakpoints.large`
        & > img {
            height: initial;
            width: 100%;
        }
    `}
`;

export const BuildingAspectRatio = styled.div`
    height: 100%;

    ${(props) => props.theme.breakpoints.large`
        width: 100%;
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

    ${(props) => props.theme.breakpoints.large`
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
