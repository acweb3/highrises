import UnstyledHamburger from 'assets/icons/hamburger.svg';
import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const HeaderHamburger = styled(UnstyledHamburger)`
    width: 24px;
    height: 24px;
`;

export const HeaderButtonWrapper = styled.div`
    width: 88px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderButton = styled(BaseButton)`
    width: min-content;

    padding: 4px 16px;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const HeaderSubtitle = styled.div`
    display: none;

    color: ${(props) => props.theme.colors.grey[0]};

    ${(props) => props.theme.breakpoints.small`
        display: block;
    `}
`;

export const HeaderBasic = styled.div`
    z-index: 0;

    position: absolute;
    padding-left: 3px;
    margin-right: -3px;
    padding-top: 3px;
    margin-bottom: -3px;

    color: ${(props) => props.theme.colors.grey[1]};
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
`;

export const HeaderFilled = styled.div`
    z-index: 1;

    font-family: ${(props) =>
        props.theme.typography.fontFamily.rc.guidelinesFull};
`;

export const HeaderDouble = styled.div`
    position: relative;
    display: flex;

    text-transform: uppercase;

    font-size: ${(props) => props.theme.typography.fontSize.h3};
    line-height: ${(props) => props.theme.typography.fontSize.h3};

    ${(props) => props.theme.breakpoints.large`
        font-size: ${props.theme.typography.fontSize.h2};
        margin-bottom: 8px;
        height: initial;

        ${
            props.isLarge &&
            css`
                font-size: ${(props) => props.theme.typography.fontSize.h3};
                line-height: ${(props) => props.theme.typography.fontSize.h3};
            `
        }}
    `}

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${props.theme.typography.fontSize.h1};
        margin-bottom: 48px;
        height: initial;

        ${
            props.isLarge &&
            css`
                font-size: ${(props) => props.theme.typography.fontSize.h2};
                line-height: ${(props) => props.theme.typography.fontSize.h2};
            `
        }}
    `}
`;

export const HeaderMobileMargin = styled.div`
    width: 100%;
    padding-bottom: 64px;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;

export const HeaderSizeWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 3rem;

    ${(props) => props.theme.breakpoints.small`
        width: initial;
    `}
`;

export const Header = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.blue[0]};

    padding: 8px 0;

    flex: 0 0 40px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 777;

    background: #fff;

    ${(props) => props.theme.breakpoints.small`
        position: relative;
    
        flex: 0 0 88px;
    
        padding: 32px 0 32px;
        max-width: 380px;
        margin: 0 auto;
    `}

    ${(props) => props.theme.breakpoints.XL`
        padding: 32px 0 48px;
        max-width: 380px;
        margin: 0 auto;
    `}
`;
