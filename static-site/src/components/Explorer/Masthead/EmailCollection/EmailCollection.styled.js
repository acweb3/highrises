import UnstyledEmail from 'assets/icons/email.svg';
import gridSrc from 'assets/images/blue-graph-paper.jpg';
import { BaseButton } from 'components/ui/BaseButton';
import styled from 'styled-components';

export const EmailIcon = styled(UnstyledEmail)`
    width: 16px;
    margin-right: 8px;

    ${(props) => props.theme.breakpoints.XL`
        width: 32px;
        margin-right: 16px;
    `}
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
    color: ${(props) => props.theme.colors.white[0]};
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.theme.breakpoints.XL`
        margin-top: 32px;
    `}
`;

export const EmailCollectionHeader = styled.div`
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    text-align: center;

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${(props) => props.theme.typography.fontSize.h2};
    `}
`;

export const EmailCollectionButton = styled(BaseButton)`
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.white[0]};
    flex: 0;
    padding: 8px 16px;
`;

export const EmailCollectionForm = styled.div`
    display: flex;

    margin-top: 24px;
    width: calc(100% - 32px);

    ${(props) => props.theme.breakpoints.small`
        width: calc(100% - 64px);
    `}

    ${(props) => props.theme.breakpoints.XL`
        margin-top: 48px;
    `}

    & > ${EmailCollectionButton} {
        margin-left: 8px;
    }
`;

export const EmailCollectionInput = styled.input`
    flex: 1;

    border-radius: 2px;
    padding: 8px;

    border: 1px solid ${(props) => props.theme.colors.grey[1]};
    text-align: center;

    color: ${(props) => props.theme.colors.grey[0]};
    background: ${(props) => props.theme.colors.grey[2]};

    &::placeholder {
        color: ${(props) => props.theme.colors.grey[0]};
    }
`;

export const Paragraph = styled.div`
    text-indent: 1rem;
    margin-top: 16px;

    ${(props) => props.theme.breakpoints.small`
        margin-top: 32px;
    `}

    ${(props) => props.theme.breakpoints.XL`
        text-indent: 1rem;
    `}
`;

export const EmailCollectionContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > ${Paragraph} {
        margin-top: 16px;

        ${(props) => props.theme.breakpoints.XL`
            margin-top: 32px;
        `}
    }
`;

export const EmailCollection = styled.div`
    color: ${(props) => props.theme.colors.white[0]};

    padding: 32px 16px 32px;

    background-image: url(${gridSrc});

    ${(props) => props.theme.breakpoints.small`
        padding: 48px 32px;
    `}

    ${(props) => props.theme.breakpoints.XL`
        padding: 64px;
    `}
`;
