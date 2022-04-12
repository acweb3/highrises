import styled, { keyframes } from 'styled-components';

export const marqueeMobile = keyframes`
  0% { transform: translateX(-30%); }
  100% { transform: translateX(30%);  }
`;

export const marqueeTablet = keyframes`
  0% { transform: translateX(-30%); opacity 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(30%); opacity: 0; }
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
    animation: ${marqueeMobile} 60s linear infinite;
    animation-delay: -20s;

    ${(props) => props.theme.breakpoints.small`
      animation: ${marqueeTablet} 30s linear infinite;
    `}
`;
