import styled from 'styled-components';

export const Sky = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
    z-index: -1;

    & > div {
        height: 100%;
        width: 100%;
    }
`;
