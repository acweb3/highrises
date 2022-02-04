import { useEthers } from '@usedapp/core';
import { RESERVED_ADDRESSES } from 'components/Reserve';
import * as S from 'components/Reserve/ReserveCheck/ReserveCheck.styled';

const getReserveStatus = (account, hasReservedToken) => {
    if (!account) {
        return {
            reserveCopy: 'Connect wallet to check reservation status.',
        };
    }

    if (hasReservedToken) {
        return {
            isReserved: true,
            reserveCopy: 'You have successfully reserved a highrise.',
        };
    }

    if (RESERVED_ADDRESSES.includes(account.toLowerCase())) {
        return {
            isReserved: true,
            reserveCopy:
                'The connected wallet is in the snapshot.  You will be able to reserve a highrise during the private reserve period.',
        };
    }

    return {
        isReserved: false,
        reserveCopy:
            'The connected wallet is not in the snapshot.  You will still be able to buy a highrise during the public sale.',
    };
};

export const ReserveCheck = ({ hasReservedToken }) => {
    const { account } = useEthers();
    const reservationStatus = getReserveStatus(account, hasReservedToken);

    return (
        <S.ReserveCheck isReserved={reservationStatus.isReserved}>
            <S.ReserveCheckCopy>
                {reservationStatus.reserveCopy}
            </S.ReserveCheckCopy>
            <S.ReserveCheckConnect />
        </S.ReserveCheck>
    );
};
