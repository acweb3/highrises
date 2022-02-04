import { EditingCard as UnstyledEditingCard } from 'components/Editing/EditingCard';
import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import styled, { css } from 'styled-components';

const isMobileTitleCss = css`
    text-align: ${(props) => (props.isMobileTitle ? 'center' : 'left')};

    ${(props) => props.theme.breakpoints.extraSmall`
        text-align: left;
    `}
`;

export const EditingCard = {
    Mobile: styled(UnstyledEditingCard)`
        margin: 48px auto;

        ${(props) => props.theme.breakpoints.extraLarge`
            display: none;
        `}
    `,
    Desktop: styled(UnstyledEditingCard)`
        display: none;

        ${(props) => props.theme.breakpoints.extraLarge`
            display: block;
        `}
    `,
};

export const P = styled(Paragraph)`
    text-indent: 0;

    ${isMobileTitleCss}
`;

export const H1 = styled(Header)`
    ${isMobileTitleCss}
`;

export const H2 = styled(Header)`
    font-size: 24px;
    margin-top: 24px;

    ${(props) => props.theme.breakpoints.mobile`
        margin-top: 16px;
        white-space: nowrap;
    `}
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

    white-space: nowrap;

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
`;

// export const EditingDescription = styled(ViewScroll)`
export const EditingDescription = styled.div`
    padding: 0px 48px 0px 40px;

    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        width: auto;
    `}
`;

export const EditingContent = styled.div`
    width: 100%;
    display: flex;
    padding: 120px 0px 80px 0px;

    ${(props) => props.theme.breakpoints.mobile`
        width: auto;
        flex: 0 0 75%;
        padding: 96px 0px 96px 0px;
    `}
`;

export const Editing = styled.div`
    background: ${(props) => props.theme.colors.white[0]};

    display: flex;
    max-width: 100vw;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;
