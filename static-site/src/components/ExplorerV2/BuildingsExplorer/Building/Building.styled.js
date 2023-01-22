import styled, { css } from 'styled-components';

export const BuildingImage = styled.img``;

export const BuildingCaption = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 120px;

    padding-top: 16px;

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
            opacity: 0.4;
        }
    }

    ${(props) => props.theme.breakpoints.mobile`
        padding-top: initial;
        justify-content: center;
    `}
`;

export const BuildingIndex = styled.div`
    font-size: 1.175rem;
    font-weight: 800;
    user-select: none;
    text-align: center;
    padding: 0 4px;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 0 16px;
    `}
`;

export const BuildingName = styled.div`
    font-size: 1rem;
    text-align: center;
    text-align: center;
`;

export const Building = styled.div`
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

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
            }
        `}
`;
