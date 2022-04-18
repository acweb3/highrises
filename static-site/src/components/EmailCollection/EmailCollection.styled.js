import UnstyledEmail from 'assets/icons/email.svg';
import { Header as UnstyledHeader } from 'components/ui/Header';
import { Paragraph as UnstyledParagraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const EmailIcon = styled(UnstyledEmail)`
    width: 16px;
    margin-right: 8px;
`;

export const EmailOutreach = styled.a`
    margin-top: 16px;
    color: ${(props) => props.theme.colors.blue[0]};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmailCollectionHeader = styled(UnstyledHeader)`
    text-align: center;
`;

export const EmailCollectionInput = styled.input`
    margin-top: 24px;
    border-radius: 16px;
    padding: 16px;

    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    text-align: center;
    min-width: 360px;
`;

export const EmailCollectionContent = styled.div`
    padding: 0 32px;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${(props) => props.theme.breakpoints.mobile`
        padding: 0;

        width: 60%;
        margin: 0 auto;
    `}
`;

export const Paragraph = styled(UnstyledParagraph)`
    text-indent: 0;
    text-align: center;
    max-width: 570px;
    margin-top: 16px;
`;

export const EmailCollection = styled.div`
    background: ${(props) => props.theme.colors.white[0]};

    padding: 72px 0 88px;
`;
