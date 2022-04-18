import UnstyledArrowDown from 'assets/icons/arrow--down.svg';
import styled from 'styled-components';

export const Birds = styled.img`
    position: absolute;
    width: 100%;
    z-index: 2;

    top: 200px;
    transform: scale(3);

    ${(props) => props.theme.breakpoints.mobile`
        top: 0;
        transform: none;
    `}
`;

export const HeroLogoImage = styled.img`
    width: 500px;
    max-width: 500px;

    ${(props) => props.theme.breakpoints.mobile`
        width: 700px;
        max-width: 700px;
    `}

    ${(props) => props.theme.breakpoints.extraSmall`
        width: 1200px;
        max-width: 1200px;
    `}
`;

export const HeroLogo = styled.div`
    z-index: 3;
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: -50px;

    ${(props) => props.theme.breakpoints.mobile`
        align-items: normal;
        margin-top: 0;
    `}
`;

export const ArrowDown = styled(UnstyledArrowDown)`
    fill: #fff;
`;

export const HeroDownNavigate = styled.div`
    padding: 8px 12px;

    position: absolute;
    z-index: 4;
    bottom: 12px;
    left: 12px;

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;

export const Hero = styled.div`
    position: relative;
    max-width: 100vw;
    overflow: hidden;

    min-height: ${(props) =>
        props.resizeHeight
            ? `${props.resizeHeight - 205.5}px`
            : 'calc(100vh - 205.5px)'};

    ${(props) => props.theme.breakpoints.mobile`
        min-height: 800px;
    `};
`;
