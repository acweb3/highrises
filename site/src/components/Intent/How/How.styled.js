import { Header } from 'components/ui/Header';
import { Paragraph as UnstyledParagraph } from 'components/ui/Paragraph';
import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const Title = styled(Header)`
    line-height: 1.75;
`;

export const Paragraph = styled(UnstyledParagraph)`
    text-indent: 0;
`;

export const Copy = styled.div`
    margin-top: 18px;
`;

export const HowContent = styled(ViewScroll)`
    position: relative;

    margin-top: auto;
    width: 55%;
    padding: 0 16px 16px;
    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-radius: 16px;
`;

export const HowContainer = styled.div`
    padding: 48px 80px 72px;
    display: flex;
    z-index: 1;
`;

export const How = styled.div`
    position: relative;
    margin-top: 600px;
    min-height: 700px;
    display: flex;
`;
