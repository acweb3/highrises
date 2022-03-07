import styled from 'styled-components';

export const Clouds = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    overflow: hidden;

    background: rgba(0, 0, 0, 0.04);
`;

export const CloudImage = styled.img`
    width: 2200px;
    opacity: 0.8;
`;

export const Cloud = styled.div.attrs((props) => ({
    style: {
        top: `${props.top ?? 0}px`,
        right: `${props.right ?? 0}px`,
        transform: `scale(${props.scale})
            translateX(${props.offset}px)`,
    },
}))`
    position: absolute;

    opacity: ${(props) => (props.isLoaded ? 1 : 0)};

    transition: opacity 0.4s, transform 2s;
`;
