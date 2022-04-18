import UnstyledLock from 'assets/icons/locked.svg';
import UnstyledUnlock from 'assets/icons/unlocked.svg';
import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import styled, { css } from 'styled-components';

const lockCss = css`
    width: 64px;

    & path {
        fill: ${(props) => props.theme.colors.blue[0]};
    }

    & rect {
        color: transparent;
    }
`;

export const MembersLockedIcon = styled(UnstyledLock)`
    ${lockCss}
`;
export const MembersUnlockedIcon = styled(UnstyledUnlock)`
    ${lockCss}
`;

export const MembersLockedCopy = styled(Paragraph)`
    text-indent: 0 !important;
    text-align: center;

    padding-bottom: 32px;
`;

export const MembersLockedHeader = styled(Header)`
    font-size: 24px;
`;

export const MembersAreaDescription = styled.div`
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${(props) => props.theme.breakpoints.medium`
        padding: 48px;
        max-width: 400px;
    `}
`;

export const MembersLockImage = styled.img`
    width: 66%;
    filter: blur(6px);
    opacity: 0.6;
`;

export const MembersLock = styled.div`
    width: 100%;
    min-height: 400px;
    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 48px;

    max-width: 800px;

    margin: 32px 0;

    ${(props) => props.theme.breakpoints.small`
        margin: 48px 0;
    `}
`;

export const MembersAreaHeader = styled(Header)`
    color: ${(props) => props.theme.colors.white[0]};
    margin-bottom: 8px;
`;

export const MembersAreaCopy = styled(Paragraph)`
    color: ${(props) => props.theme.colors.white[0]};
`;

export const MembersArea = styled.div`
    padding: 32px;
    border-radius: 16px;
    margin-bottom: 32px;
    width: 100%;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${(props) => props.theme.utility.membersGradient}

    ${(props) => props.theme.breakpoints.mobile`
        max-width: 640px;
    `}
`;
