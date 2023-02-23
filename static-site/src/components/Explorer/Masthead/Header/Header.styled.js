import styled, { css } from 'styled-components';

export const HeaderSubtitle = styled.div`
    font-size: ${(props) => props.theme.typography.fontSize.prose};
    color: ${(props) => props.theme.colors.grey[0]};
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

    font-size: ${(props) => props.theme.typography.fontSize.h2};
    line-height: ${(props) => props.theme.typography.fontSize.h2};

    ${(props) =>
        props.isLarge &&
        css`
            font-size: ${(props) => props.theme.typography.fontSize.h3};
            line-height: ${(props) => props.theme.typography.fontSize.h3};
        `}

    ${(props) => props.theme.breakpoints.large`
        font-size: ${props.theme.typography.fontSize.h2};
        margin-bottom: 16px;
        height: initial;

        ${
            props.isLarge &&
            css`
                font-size: ${(props) => props.theme.typography.fontSize.h3};
                line-height: ${(props) => props.theme.typography.fontSize.h3};
            `
        }}
    `}
`;

export const HeaderSizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 3rem;

    ${(props) => props.theme.breakpoints.small`
        height: 4rem;
    `}
`;

export const Header = styled.div`
    width: 100%;
    flex: 0 0 88px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.blue[0]};

    padding: 8px 0;

    ${(props) => props.theme.breakpoints.small`
        padding: 32px 0 32px;
        max-width: 380px;
        margin: 0 auto;
    `}
`;
