import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const ExplorerHeader = styled(Header)`
    font-size: 32px;
    line-height: 32px;

    margin-bottom: 16px;

    text-align: center;

    ${(props) => props.theme.breakpoints.small`
        text-align: left;
    `}
`;

export const ExplorerV2 = styled.div`
    /* height: calc(100vh - 140px); */
    border-top: 1px solid ${(props) => props.theme.colors.grey[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    position: relative;
`;
