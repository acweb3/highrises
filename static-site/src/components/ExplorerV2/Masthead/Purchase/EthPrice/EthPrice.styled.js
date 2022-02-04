import UnstyledEthereumIcon from 'assets/icons/ethereum.svg';
import styled from 'styled-components';

export const EthereumIcon = styled(UnstyledEthereumIcon)`
    height: 24px;
    width: 32px;
    margin-top: 6px;
    margin-left: -4px;

    ${(props) => props.theme.breakpoints.mobile`
        height: 32px;
        width: 40px;
        margin-top: 7px;
        margin-left: -8px;
    `}
`;

export const EthPriceContent = styled.div`
    display: flex;
    margin: 0 auto;

    ${(props) => props.theme.breakpoints.mobile`
        margin: 0;
    `}
`;

export const EthPrice = styled.div`
    display: flex;
`;
