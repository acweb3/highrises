import styled from 'styled-components';

export const Countdown = styled.div`
    min-height: 32px;

    display: flex;
    align-items: center;
`;

export const MintBackgroundMobile = styled.img`
    display: block;
    object-fit: cover;

    height: 100%;
    width: 100%;

    ${(props) => props.theme.breakpoints.medium`
        display: none
    `}
`;

export const MintBackgroundDesktop = styled.img`
    display: none;

    ${(props) => props.theme.breakpoints.medium`
        display: block;
        object-fit: cover;

        height: 100%;
        width: 100%;
    `}
`;

export const MintBlurb = styled.div`
    box-sizing: border-box;

    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    margin: auto;

    height: min-content;
    width: calc(100% - 32px);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.8);
    padding: 64px 48px;

    ${(props) => props.theme.breakpoints.medium`
        width: 40%;
        max-width: 640px;
    `}
`;

export const Mint = styled.div`
    height: 100vh;

    ${(props) => props.theme.breakpoints.medium`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100vh;
        width: 100vw;
    `}
`;
