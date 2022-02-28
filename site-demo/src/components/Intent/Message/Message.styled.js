import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)``;

export const Copy = styled.div`
    margin-top: 16px;
    width: 40%;
`;

export const Message = styled.div`
    background: ${(props) => props.theme.colors.white[0]};
    padding: 72px 48px 80px;
    position: absolute;
    top: 800px;
    z-index: 3;

    min-height: 600px;
    display: flex;
    align-items: center;

    & > ${Copy} {
        margin-top: 24px;
    }
`;
