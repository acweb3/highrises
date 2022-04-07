import styled from 'styled-components';

export const MobileExplorerSection = styled.div`
    flex: 1;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
`;

export const MobileExplorer = styled.div`
    width: 100vw;
    background: #fff;

    flex-direction: column;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;
