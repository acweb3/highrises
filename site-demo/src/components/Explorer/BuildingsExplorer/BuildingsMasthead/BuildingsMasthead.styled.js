import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const Title = styled(Header)`
    max-width: 900px;
`;

export const SortBar = styled.div`
    line-height: 4rem;
    font-size: 1.175rem;
    font-weight: 500;

    display: flex;
`;

export const SortLink = styled.div`
    cursor: pointer;
    margin: 0 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
`;

export const Description = styled.div`
    margin-top: 8px;
    max-width: 700px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BuildingsMasthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    height: 200px;
    padding: 48px;
    box-sizing: border-box;
`;
