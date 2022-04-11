import styled, { keyframes } from 'styled-components';

export const marquee = keyframes`
  from { transform: translateX(-10%); }
  to { transform: translateX(50%); }
`;

export const MobileCloudImage = styled.img`
    width: 2200px;
    max-width: initial;
    opacity: 0.8;
    transform: scale(${(props) => props.scale});
`;

export const MobileCloud = styled.div`
    top: ${(props) => props.top ?? 0}px;
    right: ${(props) => props.right ?? 0}px;
    position: absolute;
    animation: ${marquee} 60s linear infinite;
`;
