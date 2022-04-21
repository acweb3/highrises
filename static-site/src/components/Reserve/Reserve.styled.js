import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const ReserveCountdownWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    white-space: nowrap;

    width: 100%;

    ${(props) => props.theme.breakpoints.medium`
        width: 400px;
    `}
`;

export const ReserveCountdowns = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 48px;

    & * {
        color: ${(props) => props.theme.colors.blue[0]};
        font-family: 'R&C-BasicFull';

        font-size: 16px;
        line-height: 32px;
        font-weight: 500;
        text-transform: uppercase;

        ${(props) => props.theme.breakpoints.medium`
            font-size: 24px;
            line-height: 32px;
        `}
    }
`;

export const ReserveParagraph = styled(Paragraph)`
    text-align: center;
    margin-bottom: 48px;

    ${(props) => props.theme.breakpoints.medium`
        width: 896px;
    `}
`;

export const ReserveHeader = styled(Header)`
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 48px;
    text-align: center;

    ${(props) => props.theme.utility.bubbleBorder};

    ${(props) => props.theme.breakpoints.medium`
        width: 50%;
    `}
`;

export const ReserveGrid = styled.div`
    margin-top: 64px;
    display: grid;
    grid-template-rows: repeat(10, auto);
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;

    ${(props) => props.theme.breakpoints.medium`
        grid-template-rows: repeat(5, auto);
        grid-template-columns: repeat(4, 200px);
        column-gap: 32px;
        row-gap: 32px;
    `}
`;

export const Reserve = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px 32px;

    background: #fff;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 70%,
        rgba(255, 255, 255, 1) 100%
    );

    ${(props) => props.theme.breakpoints.medium`
        padding: 88px 32px 32px;
    `}
`;
