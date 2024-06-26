import { Header } from 'components/ui/Header';
import styled, { css } from 'styled-components';

export const BuildingNameLocation = styled.div`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.grey[0]};
`;

export const BuildingNameHeader = styled(Header)`
    margin-bottom: 4px;

    ${(props) => props.theme.breakpoints.small`
        margin-bottom: 8px;
    `}

    ${(props) => props.theme.breakpoints.XL`
        margin-bottom: 32px;
    `}
`;

export const BuildingName = styled.div`
    display: flex;
    flex-direction: column;

    padding: 32px 0 8px;

    ${(props) => props.theme.breakpoints.small`
        padding: 0 0 8px;

        ${
            props.isActiveDescription &&
            css`
                display: none;
            `
        }
    `}
`;
