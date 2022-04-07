import { Header } from 'components/ui/Header';
import styled, { css } from 'styled-components';

export const PurchaseCopy = styled.div`
    display: none;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}
`;

export const PurchaseImage = styled.img`
    margin-top: 16px;
    width: 100%;
`;

export const PurchasePrice = styled.div`
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    ${(props) => props.theme.breakpoints.mobile`
        margin-top: 16px;
        font-size: 32px;
        text-align: initial;
    `}
`;

export const PurchaseHeader = styled(Header)`
    white-space: nowrap;

    font-size: 24px;
    line-height: 2rem;
    text-align: center;

    ${(props) => props.theme.breakpoints.mobile`
        font-size: 48px;
        line-height: 4rem;
        text-align: initial;
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

export const PurchaseDisabled = styled.div`
    margin-top: 16px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-radius: 16px;

    ${(props) => props.theme.breakpoints.small`
        width: 320px;
        height: 467.33px;
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

    ${(props) => props.theme.breakpoints.mobile`
        flex: 0 0 320px;

        &:first-of-type {
            margin-right: 32px;
        }
    `}
`;
