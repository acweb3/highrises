import { CloseButton as UnstyledCloseButton } from 'components/CloseButton';
import styled from 'styled-components';

export const CloseButton = styled(UnstyledCloseButton)`
    z-index: 101;
`;

export const MobileMap = styled.div`
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
