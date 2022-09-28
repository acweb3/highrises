import UnstyledABoltC from 'assets/icons/aboltc.svg';
import UnstyledEmail from 'assets/icons/email.svg';
import { Header as UnstyledHeader } from 'components/ui/Header';
import { Paragraph as UnstyledParagraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

export const EmailIcon = styled(UnstyledEmail)`
    width: 16px;
    margin-right: 8px;
`;

export const ABoltCIcon = styled(UnstyledABoltC)`
    width: 40px;

    & > path,
    polygon {
        fill: rgba(155, 180, 192, 0.6);
    }

    &:hover {
        & > path,
        polygon {
            fill: rgba(155, 180, 192, 0.6);
        }
    }
`;

export const LogoLink = styled.a`
    display: block;
    margin-left: auto;
`;

export const LogoSection = styled.div`
    width: 100%;
    display: flex;
    padding: 32px 48px 0 0;
`;

export const EmailOutreach = styled.a`
    margin-top: 16px;
    color: #9bb4c0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmailCollectionHeader = styled(UnstyledHeader)`
    text-align: center;
    color: #9bb4c0;
`;

export const EmailCollectionInput = styled.input`
    margin-top: 24px;
    border-radius: 16px;
    padding: 16px;

    border: 1px solid #9bb4c0;
    text-align: center;
    min-width: 360px;

    color: #9bb4c0;
    background: #3f6788;

    &::placeholder {
        color: rgba(155, 180, 192, 0.6);
    }
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
    color: #9bb4c0;
`;

export const EmailCollection = styled.div`
    background: ${(props) => props.theme.colors.white[0]};
    background: #3f6788;

    padding: 72px 0 32px;
`;
