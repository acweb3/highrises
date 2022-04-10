import { Story as UnstyledStory } from 'components/Explorer/Masthead/Attributes/Story';
import { Traits as UnstyledTraits } from 'components/Explorer/Masthead/Attributes/Traits';
import { Purchase as UnstyledPurchase } from 'components/Explorer/Masthead/Purchase';
import { ExternalNavigation as UnstyledExternalNavigtion } from 'components/ExternalNavigation';
import { Header as UnstyledHeader } from 'components/ui/Header';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    margin-top: 16px;
    margin-bottom: 32px;

    padding: 0 0 32px;
    ${(props) => props.theme.utility.bubbleBorder};

    ${(props) => props.theme.breakpoints.mobile`
        padding: 0 32px 32px;
        min-width: 500px;
        max-width: 720px;
        margin-bottom: 48px;
    `}
`;

export const Story = styled(UnstyledStory)`
    margin: 16px auto 48px;
    text-align: justify;

    ${(props) => props.theme.breakpoints.small`
        min-width: 500px;
        max-width: 720px;
    `}
`;

export const Header = styled(UnstyledHeader)`
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 16px;

    ${(props) => props.theme.breakpoints.small`
        font-size: 48px;
        line-height: 4rem;
        margin-bottom: 0px;
    `}
`;

export const SubHeader = styled(UnstyledHeader)`
    font-size: 32px;
    line-height: 32px;
    text-align: center;
`;

export const BuildingDetailHeader = styled.div`
    ${(props) => props.theme.utility.bubbleBorder};
    padding: 0 32px 24px;
`;

export const Purchase = styled(UnstyledPurchase)`
    justify-content: center;
    margin-bottom: 48px;
    width: 100%;
`;

export const BuildingDetailImage = styled.img`
    height: 100%;
`;

export const BuildingDetailImageContainer = styled.div`
    margin: 48px 0 32px;
`;

export const BuildingDetailBack = styled(Link)`
    color: ${(props) => props.theme.colors.blue[0]};
    margin-bottom: 32px;
    width: 100%;
`;

export const BuildingDetail = styled.div`
    position: relative;
    z-index: 1;

    height: auto;
    width: 100vw;

    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    z-index: 999;

    padding: 32px 32px 48px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 48px 15%;
    `}
`;
