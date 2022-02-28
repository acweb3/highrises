import styled from 'styled-components';

export const Clouds = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    overflow: hidden;
`;

export const CloudImage = styled.img`
    width: 2200px;
`;

export const Cloud = styled.div`
    position: absolute;
    top: ${(props) => props.top ?? 0}px;
    right: ${(props) => props.right ?? 0}px;
    transform: scale(${(props) => props.scale})
        translateX(${(props) => props.offset}px);

    opacity: ${(props) => (props.isLoaded ? 1 : 0)};

    transition: opacity 0.4s, transform 0.4s;
`;
