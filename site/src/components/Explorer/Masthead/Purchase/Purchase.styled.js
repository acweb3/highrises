import { ReactComponent as UnstyledEthereumIcon } from 'assets/icons/ethereum.svg';
import styled from 'styled-components';

export const EthereumIcon = styled(UnstyledEthereumIcon)`
    height: 32px;
    width: 40px;
    margin-top: 7px;
    margin-left: -8px;
`;

export const Purchase = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 880px;
    margin: 64px auto 0;
`;
