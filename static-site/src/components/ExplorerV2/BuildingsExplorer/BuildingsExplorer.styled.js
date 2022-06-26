import ArrowLeft from 'assets/icons/arrow--left.svg';
import ArrowRight from 'assets/icons/arrow--right.svg';
import styled from 'styled-components';

export const BuildingsExplorerScrollLeft = styled(ArrowLeft)`
    fill: ${(props) => props.theme.colors.blue[0]};
`;
export const BuildingsExplorerScrollRight = styled(ArrowRight)`
    fill: ${(props) => props.theme.colors.blue[0]};
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
    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};
    width: 120px;
    height: 120px;

    cursor: pointer;

    position: absolute;
    bottom: 0;

    z-index: 2;

    ${(props) =>
        props.left &&
        `
        left: 0;
        border-right: 1px dotted ${props.theme.colors.blue[0]};
    `}

    ${(props) =>
        props.right &&
        `
        right: 0;
        border-left: 1px dotted ${props.theme.colors.blue[0]};
    `}

    ${(props) => props.theme.breakpoints.small`
        display: flex;
    `}
`;

export const BuildingsExplorer = styled.div`
    position: relative;
    margin-top: auto;

    ${(props) => props.theme.breakpoints.small`
    &::before {
        content: ' ';
        z-index: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 120px;
        width: 100%;
        background: white;
    }
    `}
`;

export const BuildingsWrapper = styled.div`
    position: relative;
`;
