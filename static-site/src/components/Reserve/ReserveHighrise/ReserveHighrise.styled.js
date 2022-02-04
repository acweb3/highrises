import CheckmarkFilledIcon from 'assets/icons/checkmark--filled.svg';
import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const ReserveHighriseCheckmark = styled(CheckmarkFilledIcon)`
    z-index: 2;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
    color: #00b;
`;

export const ReserveHighriseImage = styled.img``;

export const ReserveHighriseButton = styled(BaseButton)`
    margin-top: 16px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;

    ${(props) =>
        !props.isActive &&
        css`
            opacity: 0.3;
            cursor: not-allowed;
            text-decoration: line-through;

            &:hover {
                opacity: 0.3;
            }
        `}
`;

export const ReserveHighriseLink = styled.a`
    position: relative;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 200px;

    ${(props) => props.theme.breakpoints.medium`
        min-height: 291.66px;
    `}
`;

export const ReserveHighriseMessage = styled.div`
    z-index: 2;

    color: red;
    position: absolute;
    text-transform: uppercase;
    width: 80%;

    font-size: 16px;
    font-weight: 900;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.16em;

    transform: rotate(12deg);
    margin-top: -24px;

    border: 2px dashed red;

    overflow: hidden;

    ${(props) => props.theme.breakpoints.medium`
        font-size: 24px;
    `}

    ${(props) =>
        props.isReservedByYou &&
        css`
            color: #00b;
            border-color: #00b;
        `}

    ${(props) =>
        props.isReservedAddress &&
        css`
            margin-top: 64px;
            font-size: 12px;
            transform: rotate(8deg);

            ${(props) => props.theme.breakpoints.medium`
                margin-top: 88px;
                font-size: 16px;
            `}
        `}
`;

export const ReserveHighrise = styled.div`
    ${(props) =>
        !props.isActive &&
        css`
            & > ${ReserveHighriseButton}, & ${ReserveHighriseImage} {
                opacity: 0.3;
                transition: opacity 0.4s;
            }

            & ${ReserveHighriseImage} {
                &:hover {
                    opacity: 0.4;
                }
            }
        `}
`;
