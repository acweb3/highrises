import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)``;

export const Copy = styled.div`
    margin-top: 16px;
    width: 50%;
`;

export const MessageContent = styled.div`
    padding: 72px 96px 80px;

    min-height: 600px;
    display: flex;
    align-items: center;

    & > ${Copy} {
        margin-top: 24px;
    }
`;

export const Message = styled.div`
    background: ${(props) => props.theme.colors.white[0]};
    width: 100vw;

    position: absolute;
    top: 800px;
    z-index: 3;
`;
