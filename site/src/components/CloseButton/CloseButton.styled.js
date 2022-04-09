import { ReactComponent as UnstyledClose } from 'assets/icons/close.svg';
import styled from 'styled-components';

export const Close = styled(UnstyledClose)`
    color: ${(props) => props.theme.colors.blue[0]};

    & polygon {
        fill: currentColor;
    }
`;

export const CloseButton = styled.div`
    position: fixed;
    z-index: 2;

    top: 96px;
    right: 8px;

    height: 48px;
    width: 48px;

    border-radius: 50%;
    color: ${(props) => props.theme.colors.blue[0]};
    background-color: ${(props) => props.theme.colors.grey[1]};
    box-shadow: ${(props) => props.theme.shadows.medium};

    cursor: pointer;

    ${(props) => props.theme.breakpoints.mobile`
    top: 16px;
    right: 32px;
`}
`;
