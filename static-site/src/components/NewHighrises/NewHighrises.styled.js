import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const NewHighrisesHeader = styled(Header)`
    font-size: 32px;
    line-height: 32px;

    margin-bottom: 16px;

    text-align: center;

    ${(props) => props.theme.breakpoints.small`
        text-align: left;
    `}
`;
