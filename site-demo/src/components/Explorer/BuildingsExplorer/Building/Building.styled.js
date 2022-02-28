import styled from 'styled-components';

export const BuildingImage = styled.img`
    flex: 1;
`;

export const BuildingCaption = styled.div`
    background: ${(props) => props.theme.colors.grey[0]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
    white-space: nowrap;
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
    flex: 0 0 300px;
    max-width: 300px;

    cursor: pointer;

    position: relative;
`;
