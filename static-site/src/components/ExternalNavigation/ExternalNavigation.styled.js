import UnstyledMap from 'assets/icons/map.svg';
import { Mint } from 'components/Mint';
import { baseButtonCss } from 'components/ui/BaseButton';
import { ExternalButtonLink as UnstyledExternalButtonLink } from 'components/ui/BaseButton/ExternalButtonLink';
import styled, { css } from 'styled-components';

export const Map = styled(UnstyledMap)`
    fill: ${(props) => props.theme.colors.blue[0]};
    height: 18px;
    margin-bottom: 2px;
    margin-left: 8px;

    & rect {
        fill: transparent;
    }
`;

export const MapButton = styled.div`
    ${baseButtonCss}

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.blue[2]};
    background-color: ${(props) => props.theme.colors.grey[1]};

    margin-top: 8px;

    ${(props) => props.theme.breakpoints.mobile`
        top: 16px;
        right: 32px;
        height: auto;
        width: 200px;
        padding: 8px 36px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        display: none;
    `}
`;

export const buttonCss = css`
    display: block;

    margin-top: -8px;

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;

export const ExternalNavigationLink = styled(UnstyledExternalButtonLink)`
    ${buttonCss}
`;

export const ExternalNavigationMint = styled(Mint)`
    ${buttonCss}
    margin-top: 8px;
`;

export const ExternalNavigation = styled.div``;
