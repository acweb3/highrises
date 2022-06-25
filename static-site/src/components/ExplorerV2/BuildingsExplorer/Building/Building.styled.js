import styled, { css } from 'styled-components';

export const BuildingImage = styled.img`
    flex: 1;
    max-width: 400px;
    width: 400px;
    height: 600px;
`;

export const BuildingCaption = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
`;

export const BuildingIndex = {
    Mobile: styled.div`
        font-size: 1.175rem;
        font-weight: 800;
        user-select: none;

        display: block;

        /* ${(props) => props.theme.breakpoints.small`
            display: none;
        `} */
    `,
    Desktop: styled.div`
        font-size: 1.175rem;
        font-weight: 800;
        user-select: none;

        display: none;

        ${(props) => props.theme.breakpoints.small`
            display: block;
        `}
    `,
};

export const BuildingName = styled.div`
    font-size: 1rem;
    text-align: center;

    display: none;

    ${(props) => props.theme.breakpoints.small`
        display: block;
    `}
`;

export const Building = styled.div`
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    flex: 1;

    cursor: pointer;

    position: relative;

    &
        ${BuildingIndex.Mobile},
        &
        ${BuildingIndex.Desktop},,
        &
        ${BuildingName},
        &
        > ${BuildingImage} {
        transition: opacity 400ms;
    }

    ${(props) =>
        !props.isActive &&
        css`
            &
                ${BuildingIndex.Mobile},
                &
                ${BuildingIndex.Desktop},
                &
                ${BuildingName},
                &
                > ${BuildingImage} {
                opacity: 0.4;
            }

            &:hover {
                &
                    ${BuildingIndex.Mobile},
                    &
                    ${BuildingIndex.Desktop},
                    &
                    ${BuildingName},
                    &
                    > ${BuildingImage} {
                    opacity: 0.7;
                }
            }
        `};

    ${(props) => props.theme.breakpoints.medium`
        &:first-of-type {
            margin-left: 64px;
        }

        &:last-of-type {
            margin-right: 64px;
        }
    `}
`;
