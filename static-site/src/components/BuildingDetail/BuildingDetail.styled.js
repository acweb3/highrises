import { Story as UnstyledStory } from 'components/ExplorerV2/Masthead/Attributes/Story';
import { Traits as UnstyledTraits } from 'components/ExplorerV2/Masthead/Attributes/Traits';
import { Purchase as UnstyledPurchase } from 'components/ExplorerV2/Masthead/Purchase';
import { ExternalNavigation as UnstyledExternalNavigtion } from 'components/ExternalNavigation';
import { ExternalButton, ExternalButtonLink } from 'components/ui/BaseButton';
import { Header as UnstyledHeader } from 'components/ui/Header';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const ExternalNavigation = styled(UnstyledExternalNavigtion)`
    width: 100%;
    margin: -16px 0 32px;

    & a,
    div {
        width: 100%;
    }

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const Traits = styled(UnstyledTraits)`
    margin-bottom: 32px;

    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        margin-bottom: 48px;
    `}
`;

export const Story = styled(UnstyledStory)`
    margin: 16px auto 16px;
    text-align: justify;

    & * {
        text-indent: 0px;
    }
`;

export const Header = styled(UnstyledHeader)`
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 12px;

    text-transform: initial;

    text-align: center;

    ${(props) => props.theme.breakpoints.small`
        font-size: 48px;
        line-height: 4rem;
        margin-bottom: 0px;
        text-align: left;
    `}
`;

export const SubHeader = styled(UnstyledHeader)`
    font-size: 24px;
    line-height: 24px;
    margin-top: ${(props) => (props.isMarginTop ? '48px' : '8px')};

    font-weight: 100;

    text-transform: initial;

    text-align: center;

    ${(props) => props.theme.breakpoints.small`
        font-size: 24px;
        line-height: 1;
        margin-bottom: 0px;
        text-align: left;
    `}
`;

export const BuildingDetailHeader = styled.div`
    padding: 0 0 24px;
`;

export const Purchase = styled(UnstyledPurchase)`
    justify-content: center;
    margin-bottom: 48px;
    width: 100%;
`;

export const BuildingDetailTab = styled.div`
    padding: 0 8px;
    border-left: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-right: 1px dashed ${(props) => props.theme.colors.blue[0]};

    font-weight: ${(props) => (props.isActive ? 700 : 400)};

    &:first-of-type {
        border-left: none;
    }

    &:last-of-type {
        border-right: none;
    }
`;

export const BuildingDetailTabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 8px;
`;

export const BuildingDetailImage = styled.img`
    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        height: 100%;
        width: auto;
    `}
`;

export const BuildingDetailImageContainer = styled.div`
    margin: 48px 0 32px;
`;

export const BuildingDetailBack = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    margin-bottom: 32px;
    cursor: pointer;
    text-decoration: underline;
    width: fit-content;
`;

export const BuildingDetailNextHighrise = styled(Link)`
    color: ${(props) => props.theme.colors.blue[0]};
    background-color: ${(props) => props.theme.colors.grey[1]};
    position: fixed;
    bottom: 100px;
    right: -56px;
    transform: rotate(-90deg);
    padding: 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    text-decoration: none;
`;

export const BuildingDetailLastHighrise = styled(Link)`
    color: ${(props) => props.theme.colors.blue[0]};
    background-color: ${(props) => props.theme.colors.grey[1]};
    position: fixed;
    bottom: 100px;
    left: -56px;
    transform: rotate(-270deg);
    padding: 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    text-decoration: none;
`;

const buttonCss = css`
    text-align: center;
    background: ${(props) => props.theme.colors.blue[0]};
    color: ${(props) => props.theme.colors.white[0]};
    padding: 12px 0;

    font-family: Karla, sans-serif;
    letter-spacing: initial;
    text-transform: initial;
    font-size: initial;

    border-radius: 16px;
`;

export const BuildingDetailButton = styled(ExternalButton)`
    ${buttonCss}

    ${(props) =>
        props.disabled && `opacity: 0.6; text-decoration: line-through;`}
`;

export const BuildingDetailButtonLink = styled(ExternalButtonLink)`
    ${buttonCss}

    flex: 1;
`;

export const BuildingDetail = styled.div`
    position: relative;
    z-index: 1;

    height: auto;
    width: 100vw;

    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    z-index: 999;

    display: flex;
    flex-direction: column;

    padding: 0 32px;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 0 15% 48px;
    `}
`;
