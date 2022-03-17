import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const EditingVideo = styled.img`
    position: absolute;
    top: 60px;
    left: 145px;
    width: 300px;
`;

export const EditingBackgroundImage = styled.img`
    width: 100%;
`;

export const EditingCard = styled(ViewScroll)`
    box-shadow: ${(props) => props.theme.shadows.high};
    margin-right: 32px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    width: 680px;
    min-width: 680px;
    max-width: 680px;

    height: 525px;
    margin-top: auto;
    margin-bottom: auto;
`;
