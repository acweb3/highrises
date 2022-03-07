import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)`
    line-height: 48px;
`;

export const SortBar = styled.div`
    height: 40px;

    line-height: 4rem;
    font-size: 1.175rem;
    font-weight: 500;

    white-space: nowrap;

    display: flex;
    align-items: center;
`;

export const SortLink = styled.div`
    color: ${(props) => props.theme.colors.grey[0]};
    cursor: pointer;
    margin: 0 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    user-select: none;
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

export const Masthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    margin: 48px 48px 0;
    box-sizing: border-box;

    overflow: hidden;

    min-height: 300px;
`;
