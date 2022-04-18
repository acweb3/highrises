import styled, { css } from 'styled-components';

export const BuildingImage = styled.img`
    flex: 1;
    max-width: 100px;
    width: 100px;
    height: 150px;

    /* ${(props) => props.theme.breakpoints.small`
        max-width: 200px;
        width: 200px;
        height: 300px;
    `} */
`;

export const BuildingCaption = styled.div`
    background: ${(props) => props.theme.colors.grey[0]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;

    /* ${(props) => props.theme.breakpoints.small`
        height: 120px;
        padding: 32px 16px;
    `} */
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
    width: 300px;
    flex: 1;

    cursor: pointer;

    position: relative;

    & ${BuildingIndex}, & ${BuildingName}, & > ${BuildingImage} {
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