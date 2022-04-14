import { ExternalNavigation as UnstyledExternalNavigation } from 'components/ExternalNavigation';
import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const ExplorerNavigation = styled(UnstyledExternalNavigation)``;

export const Title = styled(Header)`
    line-height: 48px;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const PlaceholderDescription = styled.div`
    max-width: 700px;
`;

export const DesktopMastheadColumn = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1;
`;

export const DesktopMastheadColumns = styled.div`
    display: flex;

    & > ${DesktopMastheadColumn} {
        &:first-of-type {
            margin-right: 36px;

            ${(props) => props.theme.breakpoints.large`
                margin-right: 64px;
            `}
        }
    }
`;

export const TitleContainer = styled.div`
    padding-bottom: 36px;

    width: 80%;
    margin: 24px auto 48px;

    ${(props) => props.theme.utility.bubbleBorder}
`;

export const DesktopMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    margin: 32px 48px;
    box-sizing: border-box;

    overflow: visible;

    min-height: 300px;

    display: none;

    ${(props) => props.theme.breakpoints.medium`
        display: block;
    `}
`;
