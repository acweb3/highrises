import { ReactComponent as UnstyledMap } from 'assets/icons/map.svg';
import { CloseButton as UnstyledCloseButton } from 'components/CloseButton';
import styled from 'styled-components';

export const CloseButton = styled(UnstyledCloseButton)`
    z-index: 101;
`;

export const MobileExplorerSection = styled.div`
    flex: 1;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
`;

export const MobileMapSection = styled.div`
    flex: 1;
    position: fixed;
    top: 0;
    right: 0;

    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 100;
`;

export const MobileExplorer = styled.div`
    width: 100vw;
    background: #fff;

    flex-direction: column;

    ${(props) => props.theme.breakpoints.medium`
        display: none;
    `}
`;

export const Map = styled(UnstyledMap)`
    fill: ${(props) => props.theme.colors.blue[0]};
    height: 18px;
    margin-bottom: 2px;
    margin-left: 8px;
`;

export const MapButton = styled.div`
    margin: -8px 32px 0;
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.blue[2]};
    background-color: ${(props) => props.theme.colors.grey[1]};

    transition: opacity 0.1s linear;

    width: calc(100% - 64px);
    text-align: center;
    box-shadow: ${(props) => props.theme.shadows.medium};

    cursor: pointer;

    ${(props) => props.theme.breakpoints.mobile`
        top: 16px;
        right: 32px;
        height: auto;
        width: 200px;
        padding: 8px 36px;
    `}
`;
