import blueSkyBackgroundSrc from 'assets/images/blue-sky-background.jpg';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const Question = styled(Paragraph)`
    user-select: none;
    cursor: pointer;
    text-indent: 0;

    font-size: 1.25rem;
    font-weight: 500;
    font-family: poppins;
`;

export const Answer = styled(Paragraph)`
    text-indent: 0;
`;

export const Questions = styled.div`
    margin-top: 24px;
`;

export const FAQImage = styled.img`
    height: 800px;
    margin-top: auto;
    margin-left: 10%;
`;

export const FAQContent = styled.div`
    padding: 144px 48px 80px;
    width: 40%;
    z-index: 3;
`;

export const FAQ = styled.div`
    position: relative;

    min-height: 800px;
    background: url(${blueSkyBackgroundSrc});

    display: flex;
`;
