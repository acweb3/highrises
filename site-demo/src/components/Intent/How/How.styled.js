import blueSkyBackgroundSrc from 'assets/images/blue-sky-background.jpg';
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
    width: 40%;
`;

export const HowContent = styled(ViewScroll)`
    margin-top: auto;
`;

export const How = styled.div`
    position: relative;

    margin-top: 600px;
    min-height: 600px;
    background: url(${blueSkyBackgroundSrc});
    padding: 48px;
    display: flex;
`;
