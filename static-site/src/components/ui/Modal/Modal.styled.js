import { BaseButton } from 'components/ui/BaseButton';
import styled from 'styled-components';

export const ModalBackground = styled.div`
    z-index: 999;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: #3b5d787e;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 220px;
    overflow: hidden;

    ${(props) =>
        props.noShowMobile &&
        `
        display: none;

        
    `}

    ${(props) =>
        props.noShowMobile &&
        props.theme.breakpoints.small`
            display: flex;
        `}
`;

export const Modal = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    background: #fff;
    border-radius: 32px;
    padding: 8px 24px;
    max-width: 380px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        margin: 16px 0;

        &:first-child {
            margin-top: none;
        }

        &:last-child {
            margin-bottom: none;
        }
    }
`;

export const ModalButton = styled(BaseButton)`
    width: min-content;
    padding: 4px 16px;

    opacity: 0.9;

    letter-spacing: initial;
    text-transform: none;

    font-size: 1rem;

    &:focus,
    &:hover {
        opacity: 1;
    }

    ${(props) =>
        props.isActive &&
        css`
            opacity: 1;
        `}
`;
