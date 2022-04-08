import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)`
    line-height: 40px;
    text-align: center;
    padding-bottom: 16px;
`;

export const PlaceholderDescription = styled.div`
    max-width: 700px;
`;

export const Description = styled.div`
    margin-top: 24px;
    display: flex;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto 48px;

    padding-bottom: 8px;

    ${(props) => props.theme.utility.bubbleBorder};

    ${(props) => props.theme.breakpoints.small`
        padding-bottom: 24px;
    `}
`;

export const MobileMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    padding: 48px 32px 16px;
    width: 100vw;
    overflow: hidden;

    box-sizing: border-box;

    overflow: hidden;

    min-height: 300px;

    ${(props) => props.theme.breakpoints.medium`
        display: none;
    `}
`;
