import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const P = styled(Paragraph)`
    text-indent: 0;
`;

export const H2 = styled(Header)`
    font-size: 24px;
    margin-top: 16px;
`;

export const ListItem = styled.li`
    color: ${(props) => props.theme.colors.blue[0]};
    font-family: poppins, sans-serif;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const List = styled.ul`
    margin-bottom: 40px;
    padding-inline-start: 24px;
`;

export const EditingVideo = styled.img`
    position: absolute;
    top: 60px;
    left: 145px;
    width: 300px;
`;

export const EditingBackgroundImage = styled.img`
    width: 100%;
`;

export const Copy = styled.div`
    margin-top: 24px;
`;

export const LearnMore = styled.a`
    border-radius: 300px;
    color: ${(props) => props.theme.colors.grey[0]};
    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    background-color: transparent;

    padding: 21px 34px;

    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    margin-left: 24px;
    display: block;
    width: fit-content;

    text-decoration: none;

    transition: 0.1s background-color linear, 0.1s color linear;

    &:hover {
        background: ${(props) => props.theme.colors.grey[0]};
        color: ${(props) => props.theme.colors.white[0]};
    }
`;

export const EditingPrice = styled.div`
    font-size: 48px;
    font-weight: 700;
`;

export const EditingBuy = styled.div`
    display: flex;
    color: ${(props) => props.theme.colors.blue[0]};
    align-items: center;
    /* justify-content: center; */
`;

export const EditingDescription = styled(ViewScroll)`
    padding: 48px 48px 88px 40px;
`;

export const EditingCard = styled(ViewScroll)`
    box-shadow: ${(props) => props.theme.shadows.high};
    margin-bottom: 112px;
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

export const EditingContent = styled.div`
    flex: 0 0 75%;
    display: flex;
`;

export const Editing = styled.div`
    display: flex;
    max-width: 100vw;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;
