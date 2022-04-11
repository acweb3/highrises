import styled from 'styled-components';

export const DesktopCloudImage = styled.img`
    width: 2200px;
    max-width: initial;
    opacity: 0.8;
`;

export const DesktopCloud = styled.div.attrs((props) => ({
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
