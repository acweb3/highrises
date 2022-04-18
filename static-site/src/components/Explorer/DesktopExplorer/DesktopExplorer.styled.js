import styled from 'styled-components';

export const DesktopExplorerSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: ${(props) => (props.right ? '55vw' : '45vw')};
    min-width: ${(props) => (props.right ? '55vw' : '45vw')};
`;

export const DesktopExplorer = styled.div`
    width: 100vw;
    background: #fff;
    padding: 48px 0;

    display: none;

    ${(props) => props.theme.breakpoints.medium`
        display: flex;
    `}
`;
