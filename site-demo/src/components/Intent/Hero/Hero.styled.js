import blueSkyBackgroundSrc from 'assets/images/blue-sky-background.jpg';
import styled from 'styled-components';

export const HeroLogo = styled.img`
    z-index: 2;
    position: absolute;
    top: 160px;
    left: 120px;

    width: 600px;

    border: 5px dashed #d5e8f0;
    box-shadow: 16px 16px 0px 0px #d5e8f0a0;
`;

export const Hero = styled.div`
    position: relative;

    min-height: 800px;
    background: url(${blueSkyBackgroundSrc});
`;
