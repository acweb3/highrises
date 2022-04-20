import { Web3Connect } from 'components/ContextFAB/Web3Connect';
import { Paragraph } from 'components/ui/Paragraph';
import styled, { css } from 'styled-components';

export const ReserveCheckConnect = styled(Web3Connect)`
    background-color: transparent;
    color: ${(props) => props.theme.colors.blue[0]};
    border-color: ${(props) => props.theme.colors.blue[0]};

    &:hover {
        background-color: transparent;
    }
`;

export const ReserveCheckCopy = styled(Paragraph)`
    text-indent: 0;
    margin-top: 16px;
    text-align: center;

    ${(props) => props.theme.breakpoints.medium`
        text-align: left;
        margin-top: 0;
    `}
`;

export const ReserveCheck = styled.div`
    margin-top: 48px;
    padding: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};

    ${(props) =>
        props.isReserved === true &&
        css`
            border-color: #00b;

            & * {
                color: #00b;
                border-color: #00b;
            }
        `}

    ${(props) =>
        props.isReserved === false &&
        css`
            border-color: #fc6d00;

            & * {
                color: #fc6d00;
                border-color: #fc6d00;
            }
        `}

    ${(props) => props.theme.breakpoints.medium`
        width: 66%;
        flex-direction: row;
    `}
`;
