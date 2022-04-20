import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const ReserveCountdownWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
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
        font-family: poppins;
        line-height: 32px;
        font-weight: 500;
    }
`;

export const ReserveParagraph = styled(Paragraph)`
    width: 50%;
    text-align: center;
    margin-bottom: 48px;
`;

export const ReserveHeader = styled(Header)`
    ${(props) => props.theme.utility.bubbleBorder};
    padding-bottom: 24px;
    margin-bottom: 48px;
    width: 50%;
    text-align: center;
`;

export const ReserveGrid = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(4, 200px);
    column-gap: 32px;
    row-gap: 32px;
`;

export const Reserve = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 88px 32px 32px;

    background: #fff;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 70%,
        rgba(255, 255, 255, 1) 100%
    );
`;
