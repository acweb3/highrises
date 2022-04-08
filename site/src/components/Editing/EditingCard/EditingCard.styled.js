import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const EditingVideo = styled.img`
    position: absolute;
    top: 30px;
    left: 65px;
    width: 127px;

    ${(props) => props.theme.breakpoints.mobile`
        top: 60px;
        left: 145px;
        width: 300px;
    `}
`;

export const EditingBackgroundImage = styled.img`
    width: 100%;
`;

export const EditingCard = styled(ViewScroll)`
    box-shadow: ${(props) => props.theme.shadows.high};

    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin-top: auto;
    margin-bottom: auto;

    margin-top: 32px;

    width: 300px;
    min-width: 300px;
    max-width: 300px;

    ${(props) => props.theme.breakpoints.mobile`
        margin-top: 0;
        margin-right: 32px;

        height: 525px;
        
        width: 680px;
        min-width: 680px;
        max-width: 680px;
    `}
`;
