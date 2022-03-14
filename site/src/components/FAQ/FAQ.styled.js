import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const Birds = styled.img`
    position: absolute;
    width: 100%;
    z-index: 1;
`;

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
`;

export const FAQImageWrapper = styled.div`
    /* width: 50%; */
    z-index: 2;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10%;
`;

export const FAQContent = styled.div`
    padding: 144px 48px 80px;
    width: 40%;
    z-index: 3;
`;

export const FAQ = styled.div`
    position: relative;

    min-height: 800px;
    display: flex;
    overflow: hidden;
`;
