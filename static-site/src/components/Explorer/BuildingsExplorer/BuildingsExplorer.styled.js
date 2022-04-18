import ArrowLeft from 'assets/icons/arrow--left.svg';
import ArrowRight from 'assets/icons/arrow--right.svg';
import styled from 'styled-components';

export const BuildingsExplorerScrollLeft = styled(ArrowLeft)`
    fill: #fff;
`;
export const BuildingsExplorerScrollRight = styled(ArrowRight)`
    fill: #fff;
`;

export const BuildingsScrollInfo = styled.div`
    width: 100vw;
    text-align: right;
    padding: 24px 32px 0;
    margin-bottom: -24px;
    color: ${(props) => props.theme.colors.grey[1]};

    ${(props) => props.theme.breakpoints.medium`
        display: none;
    `}
`;

export const BuildingsScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    width: 100vw;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BuildingsExplorerArrow = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.grey[0]};
    color: #fff;
    width: 64px;
    height: 48px;

    cursor: pointer;

    position: absolute;
    bottom: 0;

    z-index: 2;

    ${(props) =>
        props.left &&
        `
        left: 0;
        border-right: 1px dotted #fff;
    `}

    ${(props) =>
        props.right &&
        `
        right: 0;
        border-left: 1px dotted #fff;
    `}

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;

export const BuildingsExplorer = styled.div`
    position: relative;

    &::after {
        content: ' ';
        position: absolute;
        height: calc(100% - 48px);
        width: 20px;

        top: 0;
        left: 0;

        background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 70%,
            rgba(255, 255, 255, 1) 100%
        );
    }

    &::before {
        content: ' ';
        position: absolute;
        height: calc(100% - 48px);
        width: 20px;
        z-index: 1;

        top: 0;
        right: 0;

        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 70%,
            rgba(255, 255, 255, 1) 100%
        );
    }

    ${(props) => props.theme.breakpoints.medium`
        margin-right: 32px;
    `}
`;

export const BuildingsWrapper = styled.div`
    position: relative;
`;
