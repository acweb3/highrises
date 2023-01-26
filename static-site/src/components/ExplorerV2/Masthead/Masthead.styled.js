import { ExternalButtonLink } from 'components/ui/BaseButton';
import styled, { keyframes } from 'styled-components';

export const DesktopMastheadExternalButtonLink = styled(ExternalButtonLink)`
    width: 100%;
    margin: 0 0 8px;

    text-align: center;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.blue[0]};
    color: ${(props) => props.theme.colors.white[0]};
    padding: 8px 0;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-8px);} 
   60% {transform: translateY(-10px);} 
`;

export const DesktopMastheadAlert = styled.div`
    font-style: italic;
    text-align: right;

    margin: 16px 0 0;

    ${(props) => props.theme.breakpoints.small`
        animation: ${bounce} 1s;
        animation-delay: 1s;
    `}
`;

export const DesktopMastheadImage = styled.img`
    margin: 16px auto 32px;
    width: 75%;

    transition: opacity 100ms;

    &:hover {
        opacity: 0.9;
    }
`;

export const DesktopMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 16px 32px 32px;
`;
