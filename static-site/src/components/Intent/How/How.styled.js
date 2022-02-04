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
    padding: 16px 16px 32px;
    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);

    ${(props) => props.theme.breakpoints.small`
        width: 55%;
        padding: 0 16px 16px;
        background: transparent;
    `}
`;

export const HowContainer = styled.div`
    padding: 80px 32px 96px;
    display: flex;
    z-index: 1;

    ${(props) => props.theme.breakpoints.small`padding: 48px 80px 72px;`}
`;

export const How = styled.div`
    position: relative;
    display: flex;

    ${(props) => props.theme.breakpoints.small`
        margin-top: 600px;
        min-height: 700px;
    `}
`;
