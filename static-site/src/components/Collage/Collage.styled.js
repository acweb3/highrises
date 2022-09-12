import styled from 'styled-components';

export const Collage = styled.div`
    position: relative;
    max-width: 100vw;
    overflow: hidden;

    min-height: calc(100vh - 250.5px);
    background-color: ${(props) => props.theme.colors.grey[1]};

    ${(props) => props.theme.breakpoints.mobile`
        min-height: 800px;
    `};
`;
