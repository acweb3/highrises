import { ReactComponent as UnstyledClose } from 'assets/icons/close.svg';
import { Story as UnstyledStory } from 'components/Explorer/Masthead/Attributes/Story';
import { Traits as UnstyledTraits } from 'components/Explorer/Masthead/Attributes/Traits';
import { Purchase as UnstyledPurchase } from 'components/Explorer/Masthead/Purchase';
import { Header as UnstyledHeader } from 'components/ui/Header';
import styled from 'styled-components';

export const Traits = styled(UnstyledTraits)`
    margin-top: 16px;
    margin-bottom: 48px;
    min-width: 500px;
    max-width: 720px;

    padding: 0 32px 32px;
    ${(props) => props.theme.utility.bubbleBorder};
`;

export const Story = styled(UnstyledStory)`
    margin: 16px auto 48px;
    min-width: 500px;
    max-width: 720px;
    text-align: justify;
`;

export const Header = styled(UnstyledHeader)`
    line-height: 48px;
    text-align: center;
`;

export const SubHeader = styled(UnstyledHeader)`
    font-size: 36px;
    line-height: 36px;
    text-align: center;
`;

export const ModalHeader = styled.div`
    ${(props) => props.theme.utility.bubbleBorder};
    padding: 0 32px 24px;
`;

export const Close = styled(UnstyledClose)`
    color: ${(props) => props.theme.colors.blue[0]};
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 16px;
    right: 32px;

    height: 48px;
    width: 48px;

    cursor: pointer;
`;

export const Purchase = styled(UnstyledPurchase)`
    justify-content: center;
    margin-bottom: 48px;
`;

export const ModalImage = styled.img`
    height: 100%;
`;

export const ModalImageContainer = styled.div`
    height: 600px;
    margin: 48px 0 32px;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};

    z-index: 999;

    height: 100vh;
    width: 100vw;

    overflow-y: scroll;
    overflow-x: scroll;

    padding: 48px 15%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
