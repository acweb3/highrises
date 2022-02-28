import { Paragraph as UnstyledParagraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const EmailCollectionInput = styled.input`
    margin-top: 24px;
    border-radius: 16px;
    padding: 16px;

    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    text-align: center;
    min-width: 360px;
`;

export const EmailCollectionContent = styled.div`
    width: 60%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Paragraph = styled(UnstyledParagraph)`
    text-indent: 0;
    text-align: center;
    max-width: 570px;
    margin-top: 16px;
`;

export const EmailCollection = styled.div`
    padding: 72px 0 88px;
`;
