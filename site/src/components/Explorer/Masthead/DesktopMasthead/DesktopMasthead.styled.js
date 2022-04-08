import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)`
    line-height: 48px;
`;

export const PlaceholderDescription = styled.div`
    max-width: 700px;
`;

export const Description = styled.div`
    margin-top: 24px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
