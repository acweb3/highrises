import UnstyledPlus from 'assets/icons/add.svg';
import UnstyledMinus from 'assets/icons/subtract.svg';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const Plus = styled(UnstyledPlus)`
    color: ${(props) => props.theme.colors.blue[0]};
    width: 24px;
    min-width: 24px;
    margin-right: 4px;
`;

export const Minus = styled(UnstyledMinus)`
    color: ${(props) => props.theme.colors.blue[0]};
    width: 24px;
    min-width: 24px;
    margin-right: 4px;
`;

export const Birds = styled.img`
    position: absolute;
    width: 100%;
    z-index: 1;
`;

export const Question = styled(Paragraph)`
    user-select: none;
    cursor: pointer;
    text-indent: 0;

    padding: 16px 0 8px;

    font-weight: 500;
    font-family: poppins;

    position: relative;

    display: flex;
    align-items: center;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 66%;
        border-top: 1px solid ${(props) => props.theme.colors.blue[0]};
    }

    ${(props) => props.theme.breakpoints.small`
        font-size: 1.25rem;
        margin-top: 32px;
        white-space: nowrap;
    `}
`;

export const Answer = styled(Paragraph)`
    text-indent: 0;

    font-weight: 400;
    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.6);
    padding: 16px;

    ${(props) => props.theme.breakpoints.mobile`
        font-weight: 500;
        border: none;
        border-radius: 0;
        background: transparent;
        padding: 0;
    `}
`;

export const Questions = styled.div`
    margin-top: 24px;
`;

export const FAQImage = styled.div`
    margin-top: auto;
    height: 500px;

    ${(props) => props.theme.breakpoints.small`
        height: 900px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        height: 1000px;
    `}

    ${(props) => props.theme.breakpoints.large`
        height: 1200px;
    `}
`;

export const FAQImageWrapper = styled.div`
    display: flex;

    z-index: 2;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;

    ${(props) => props.theme.breakpoints.small`
        right: -45%;
    `}

    ${(props) => props.theme.breakpoints.medium`
        right: -25%;
    `}

    ${(props) => props.theme.breakpoints.large`
        right: -15%;
    `}

    ${(props) => props.theme.breakpoints.extraLarge`
        right: -5%;
    `}
`;

export const FAQContent = styled.div`
    z-index: 3;
    padding: 80px 32px 80px;
    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 144px 96px 80px;
        width: 90%;
    `}

    ${(props) => props.theme.breakpoints.small`
        width: 80%;
    `}

    ${(props) => props.theme.breakpoints.medium`
        width: 60%;
    `}

    ${(props) => props.theme.breakpoints.large`
        width: 40%;
    `}
`;

export const FAQ = styled.div`
    position: relative;

    display: flex;
    overflow: hidden;

    min-height: 1600px;

    ${(props) => props.theme.breakpoints.small`
        min-height: 1300px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        min-height: 1400px;
    `}

    ${(props) => props.theme.breakpoints.large`
        min-height: 1500px;
    `}
`;
