import { ReactComponent as ArrowLeft } from 'assets/icons/arrow--left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow--right.svg';
import styled from 'styled-components';

export const BuildingsExplorerScrollLeft = styled(ArrowLeft)`
    fill: #fff;
`;
export const BuildingsExplorerScrollRight = styled(ArrowRight)`
    fill: #fff;
`;

export const BuildingsScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BuildingsExplorerArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.grey[0]};
    color: #fff;
    width: 64px;
    height: 120px;

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
`;

export const BuildingsExplorer = styled.div`
    position: relative;
    user-select: none;
    margin-right: 32px;
`;
