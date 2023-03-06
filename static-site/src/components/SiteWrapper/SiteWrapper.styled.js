import styled, { createGlobalStyle, css } from 'styled-components';

export const SiteWrapperOffset = styled.div`
    ${(props) => props.theme.breakpoints.small`
        height: calc(100vh + 100px);
    `}
`;

export const SiteWrapperNav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
`;

export const SiteWrapperScroll = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;

    transition: transform 400ms;
    transform: translate3D(0px, 0, 0px);
    box-shadow: ${(props) => props.theme.shadows.inset.medium};
    will-change: transform;

    ${(props) =>
        props.transform &&
        css`
            transform: translate3D(0px, ${props.transform}px, 0px);
        `}
`;

export const SiteWrapper = styled.div`
    height: 100%;
    overflow: hidden;

    ${(props) =>
        props.theme.breakpoints.small`
        overflow: initial;
    `}

    ${(props) =>
        props.theme.breakpoints.XL`
        font-size: 2rem;
    `}
`;

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Karla, sans-serif;
    }

    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
        margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;

        max-width: 100vw;
        overflow-x: hidden;

        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0 !important;
            display: none;
        }
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }

    html, body {
        touch-action: none
    }
`;
