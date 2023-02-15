import styled from 'styled-components';

export const BuildingBadge = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 1;

    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[1]};
    border-radius: 50%;
    height: 24px;
    width: 24px;

    font-size: small;

    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;
