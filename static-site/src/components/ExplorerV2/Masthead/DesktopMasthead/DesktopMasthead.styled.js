import { CloseButton } from 'components/CloseButton';
import { ExternalButtonLink } from 'components/ui/BaseButton';
import styled from 'styled-components';

export const DesktopMastheadX = styled(CloseButton)`
    position: relative;
    box-shadow: none;
    background: transparent;
    margin-left: auto;
    margin-bottom: 16px;
    margin-top: -16px;

    bottom: initial;
    right: initial;
`;

export const DesktopMastheadExternalButtonLink = styled(ExternalButtonLink)`
    width: 100%;
    margin: 0 0 8px;

    text-align: center;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.white[0]};
    color: ${(props) => props.theme.colors.blue[0]};
    padding: 8px 0;
`;

export const DesktopMastheadImage = styled.img`
    margin: 16px 0;
    width: 100%;
`;

export const DesktopMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: rgba(255, 255, 255, 0.6);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.8) calc(100% - 121px),
        rgba(255, 255, 255, 1) calc(100% - 120px)
    );
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    box-sizing: border-box;

    overflow-x: hidden;
    overflow-y: scroll;

    min-height: 100vh;
    height: 100vh;
    width: 33vw;

    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;

    padding: 48px 48px 168px;

    z-index: 2;
`;
