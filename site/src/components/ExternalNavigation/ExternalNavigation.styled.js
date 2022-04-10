import { ReactComponent as UnstyledMap } from 'assets/icons/map.svg';
import { baseButtonCss } from 'components/ui/BaseButton';
import { ExternalButtonLink as UnstyledExternalButtonLink } from 'components/ui/BaseButton/ExternalButtonLink';
import styled from 'styled-components';

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
    width: calc(100% - 64px);

    ${(props) => props.theme.breakpoints.mobile`
        top: 16px;
        right: 32px;
        height: auto;
        width: 200px;
        padding: 8px 36px;
    `}
`;

export const ExternalNavigationLink = styled(UnstyledExternalButtonLink)`
    display: block;

    margin-top: -8px;
    width: calc(100% - 64px);

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;

export const ExternalNavigation = styled.div``;
