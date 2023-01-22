import styled, { css } from 'styled-components';

export const BuildingImage = styled.img``;

export const BuildingCaption = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 120px;

    padding-top: 16px;

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
    flex: 1;

    cursor: pointer;

    position: relative;

    & ${BuildingIndex},, & ${BuildingName}, & > ${BuildingImage} {
        transition: opacity 400ms;
    }

    ${(props) =>
        !props.isActive &&
        css`
            & ${BuildingIndex}, & ${BuildingName}, & > ${BuildingImage} {
                opacity: 0.4;
            }

            &:hover {
                & ${BuildingIndex}, & ${BuildingName}, & > ${BuildingImage} {
                    opacity: 0.7;
                }
            }
        `};
`;
