import UnstyledABoltC from 'assets/icons/aboltc.svg';
import UnstyledEmail from 'assets/icons/email.svg';
import gridSrc from 'assets/images/blue-graph-paper.jpg';
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
    color: ${(props) => props.theme.colors.white[0]};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmailCollectionHeader = styled.div`
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    text-align: center;
`;

export const EmailCollectionInput = styled.input`
    margin-top: 24px;
    border-radius: 2px;
    padding: 8px;

    border: 1px solid ${(props) => props.theme.colors.grey[1]};
    text-align: center;

    width: calc(100% - 32px);

    color: ${(props) => props.theme.colors.grey[0]};
    background: ${(props) => props.theme.colors.grey[2]};

    &::placeholder {
        color: ${(props) => props.theme.colors.grey[0]};
    }

    ${(props) => props.theme.breakpoints.small`
        width: calc(100% - 64px);
    `}
`;

export const Paragraph = styled.div`
    text-indent: 1rem;
    margin-top: 16px;

    ${(props) => props.theme.breakpoints.small`
        margin-top: 32px;
    `}
`;

export const EmailCollectionContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > ${Paragraph} {
        margin-top: 16px;
    }
`;

export const EmailCollection = styled.div`
    color: ${(props) => props.theme.colors.white[0]};

    padding: 32px 16px 32px;

    background-image: url(${gridSrc});

    ${(props) => props.theme.breakpoints.small`
        padding: 48px 32px;
    `}
`;
