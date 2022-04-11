import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';
import styled from 'styled-components';

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
