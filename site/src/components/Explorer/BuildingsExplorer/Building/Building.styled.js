import styled, { css } from 'styled-components';

export const BuildingImage = styled.img`
    flex: 1;
    max-width: 300px;
`;

export const BuildingCaption = styled.div`
    background: ${(props) => props.theme.colors.grey[0]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
    white-space: nowrap;
    width: 100%;
    height: 120px;
`;

export const BuildingIndex = styled.div`
    font-size: 1.175rem;
    font-weight: 800;
`;

export const BuildingName = styled.div`
    font-size: 1rem;
    text-align: center;
`;

export const BuildingContainer = styled.div`
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
