import styled from 'styled-components';

export const HeaderSubtitle = styled.div`
    font-size: ${(props) => props.theme.typography.fontSize.prose};
    margin-top: 8px;
    color: ${(props) => props.theme.colors.grey[0]};
`;

export const HeaderBasic = styled.div`
    z-index: 0;

    position: absolute;
    padding-left: 3px;
    margin-right: -3px;

    color: ${(props) => props.theme.colors.grey[1]};
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
`;

export const HeaderFilled = styled.div`
    z-index: 1;

    height: ${(props) => props.theme.typography.fontSize.h1};
    font-family: ${(props) =>
        props.theme.typography.fontFamily.rc.guidelinesFull};
`;

export const HeaderDouble = styled.div`
    position: relative;
    display: flex;

    text-transform: uppercase;

    font-size: ${(props) => props.theme.typography.fontSize.h2};
    height: ${(props) => props.theme.typography.fontSize.h2};

    ${(props) => props.theme.breakpoints.small`
        font-size: ${props.theme.typography.fontSize.h1};
        margin-bottom: 16px;
        height: initial;
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

    padding: 0 0 16px;

    ${(props) => props.theme.breakpoints.small`
        padding: 32px 0 32px;
    `}
`;
