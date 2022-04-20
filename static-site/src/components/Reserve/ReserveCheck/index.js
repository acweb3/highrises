import { useEthers } from '@usedapp/core';
import { RESERVED_ADDRESSES } from 'components/Reserve';
import * as S from 'components/Reserve/ReserveCheck/ReserveCheck.styled';

const getReserveStatus = (account) => {
    if (!account) {
        return {
            reserveCopy: 'Connect wallet to check reservation status.',
        };
    }

    if (RESERVED_ADDRESSES.includes(account.toLowerCase())) {
        return {
            isReserved: true,
            reserveCopy:
                'The connected wallet is on the reserve list.  You will be able to reserve a token during the private reserve period.',
        };
    }

    return {
        isReserved: false,
        reserveCopy:
            'The connected wallet is not on the reserve list.  You will still be able to reserve a token during the public reserve period.',
    };
};

export const ReserveCheck = () => {
    const { account } = useEthers();
    const reservationStatus = getReserveStatus(account);

    return (
        <S.ReserveCheck isReserved={reservationStatus.isReserved}>
            <S.ReserveCheckCopy>
                {reservationStatus.reserveCopy}
            </S.ReserveCheckCopy>
            <S.ReserveCheckConnect />
        </S.ReserveCheck>
    );
};
