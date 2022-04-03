import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)``;

export const Copy = styled.div`
    margin-top: 16px;
    width: 100%;

    ${(props) => props.theme.breakpoints.small`
        margin-top: 16px;
        width: 50%;
    `}
`;

export const MessageContent = styled.div`
    padding: 72px 32px 80px;

    min-height: 600px;
    display: flex;
    align-items: center;

    & > ${Copy} {
        margin-top: 24px;
    }

    ${(props) => props.theme.breakpoints.small`
        padding: 80px 96px 88px;
    `}
`;

export const Message = styled.div`
    background: ${(props) => props.theme.colors.white[0]};
    width: 100vw;

    position: relative;
    z-index: 4;

    ${(props) => props.theme.breakpoints.small`
        position: absolute;
        top: 800px;
        z-index: 3;
    `}
`;
