import { ViewScroll } from 'components/ui/ViewScroll';
import styled from 'styled-components';

export const ListItem = styled.li`
    font-family: poppins;
`;

export const List = styled.ul`
    margin-bottom: 32px;
    padding-inline-start: 24px;
`;

export const SectionHeader = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
    font-family: poppins;
    margin-top: 16px;
`;

export const Section = styled(ViewScroll)`
    max-width: 400px;

    color: ${(props) => props.theme.colors.blue[0]};
`;
