import { Sky as UnstyledSky } from 'components/Sky';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const Sky = styled(UnstyledSky)`
    width: auto;
    height: 100%;

    ${(props) => props.theme.breakpoints.medium`
        height: auto;
        width: 100%;
    `}
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
    margin-top: auto;
    height: 600px;

    ${(props) => props.theme.breakpoints.large`
        height: 800px;
    `}
`;

export const FAQImageWrapper = styled.div`
    display: flex;

    z-index: 2;
    position: absolute;
    height: 100%;
    top: 0;
    right: -35%;

    ${(props) => props.theme.breakpoints.small`
        right: -15%;
    `}

    ${(props) => props.theme.breakpoints.medium`
        right: 5%;
    `}

    ${(props) => props.theme.breakpoints.large`
        right: 10%;
    `}
`;

export const FAQContent = styled.div`
    padding: 144px 96px 80px;
    z-index: 3;
    width: 90%;

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

    min-height: 1000px;

    ${(props) => props.theme.breakpoints.medium`
        min-height: 900px;
    `}

    ${(props) => props.theme.breakpoints.large`
        min-height: 1000px;
    `}
`;
