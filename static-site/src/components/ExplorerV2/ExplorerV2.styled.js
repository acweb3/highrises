import styled from 'styled-components';

export const ExplorerV2 = styled.div`
    /* height: calc(100vh - 140px); */
    border-top: 1px solid ${(props) => props.theme.colors.grey[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    position: relative;

    ${(props) => props.theme.breakpoints.small`
        min-height: calc(100vh + 350px);
    `}
`;