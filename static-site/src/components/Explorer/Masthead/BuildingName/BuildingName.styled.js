import styled from 'styled-components';

export const BuildingNameLocation = styled.div`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.grey[0]};
`;

export const BuildingNameHeader = styled.div`
    text-align: center;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: 800;
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    margin-bottom: 8px;
`;

export const BuildingName = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 0 32px;
`;
