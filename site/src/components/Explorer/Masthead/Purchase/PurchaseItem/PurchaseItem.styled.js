import { ExternalButton } from 'components/ui/BaseButton';
import { ExternalButtonLink as UnstyledExternalButtonLink } from 'components/ui/BaseButton/ExternalButtonLink';
import { Header } from 'components/ui/Header';
import styled, { css } from 'styled-components';

const imageCss = css`
    width: 100%;
    height: auto;

    ${(props) =>
        !props.isFullPage &&
        css`
            ${(props) => props.theme.breakpoints.extraSmall`
                width: 304px;
                height: 444px;
            `}

            ${(props) => props.theme.breakpoints.medium`
                width: 160px;
                height: 233.66px;
            `}

            ${(props) => props.theme.breakpoints.large`
                width: 304px;
                height: 444px;
            `}
        `}
`;

export const PurchaseExternalLinkDisabled = styled(ExternalButton)`
    opacity: 0.6;
    cursor: disabled;
    text-decoration: line-through;

    display: none;
    cursor: default;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}

    &:hover {
        opacity: 0.6;
    }
`;

export const PurchaseExternalLink = styled(UnstyledExternalButtonLink)`
    display: none;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}
`;

export const PurchaseCopy = styled.div`
    display: none;
    text-align: center;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}

    ${(props) => props.theme.breakpoints.medium`
        text-align: initial;
    `}
`;

export const PurchaseImage = styled.img`
    margin-top: 16px;

    ${imageCss}
`;

export const PurchaseDisabled = styled.div`
    margin-top: 16px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};

    ${imageCss}
    height: 100%;
`;

export const PurchasePrice = styled.div`
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => props.theme.breakpoints.mobile`
        margin-top: 16px;
        font-size: 32px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        text-align: initial;
        justify-content: initial;
    `}
`;

export const PurchaseHeader = styled(Header)`
    white-space: nowrap;

    font-size: 24px;
    line-height: 2rem;
    text-align: center;

    ${(props) => props.theme.breakpoints.mobile`
        line-height: 3rem;
        white-space: initial;
    `}

    ${(props) => props.theme.breakpoints.small`
        font-size: 48px;
        line-height: 4rem;
        margin-bottom: 16px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        text-align: initial;
    `}

    ${(props) => props.theme.breakpoints.large`
        font-size: 48px;
        line-height: 4rem;

        white-space: nowrap;
        margin-left: -8px;
    `}
`;

export const PurchaseComingSoon = styled.div`
    text-transform: uppercase;
    width: 80%;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.16em;

    transform: rotate(7deg);

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};

    ${(props) => props.theme.breakpoints.mobile`
        width: 180px;
        height: 40px;
    `}
`;

export const PurchaseItemAsset = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props) =>
        !props.isFullPage &&
        props.theme.breakpoints.mobile`
        margin-top: auto;
    `}

    ${(props) => props.theme.breakpoints.medium`
        align-items: initial;
    `}
`;

export const PurchaseItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;

    &:first-of-type {
        margin-right: 16px;
    }

    ${(props) =>
        props.isCentered &&
        css`
            & div {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }
        `}
`;
