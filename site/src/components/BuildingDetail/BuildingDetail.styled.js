import { ReactComponent as UnstyledClose } from 'assets/icons/close.svg';
import { Story as UnstyledStory } from 'components/Explorer/Masthead/Attributes/Story';
import { Traits as UnstyledTraits } from 'components/Explorer/Masthead/Attributes/Traits';
import { Purchase as UnstyledPurchase } from 'components/Explorer/Masthead/Purchase';
import { Header as UnstyledHeader } from 'components/ui/Header';
import styled, { css } from 'styled-components';

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

    ${(props) => props.theme.breakpoints.mobile`
        min-width: 500px;
        max-width: 720px;
    `}
`;

export const Header = styled(UnstyledHeader)`
    line-height: 48px;
    text-align: center;
`;

export const SubHeader = styled(UnstyledHeader)`
    font-size: 36px;
    line-height: 36px;
    text-align: center;
`;

export const BuildingDetailHeader = styled.div`
    ${(props) => props.theme.utility.bubbleBorder};
    padding: 0 32px 24px;
`;

export const Close = styled(UnstyledClose)`
    color: ${(props) => props.theme.colors.blue[0]};
`;

export const CloseButton = styled.div`
    position: fixed;
    z-index: 2;

    top: 96px;
    right: 8px;

    height: 48px;
    width: 48px;

    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.grey[1]};
    box-shadow: ${(props) => props.theme.shadows.medium};

    cursor: pointer;

    ${(props) => props.theme.breakpoints.mobile`
        top: 16px;
        right: 32px;
    `}
`;

export const Purchase = styled(UnstyledPurchase)`
    justify-content: center;
    margin-bottom: 48px;
`;

export const BuildingDetailImage = styled.img`
    height: 100%;
`;

export const BuildingDetailImageContainer = styled.div`
    height: 600px;
    margin: 48px 0 32px;
`;

export const BuildingDetail = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    z-index: 999;

    height: 100vh;
    width: 100vw;

    overflow-y: scroll;
    overflow-x: scroll;

    padding: 48px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 48px 15%;
    `}

    ${(props) =>
        props.isFullPage &&
        css`
            position: relative;
            z-index: 1;

            height: auto;
            width: 100vw;
        `}
`;
