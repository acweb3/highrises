import { useEthers } from '@usedapp/core';
import { Countdown } from 'components/Countdown';
import * as S from 'components/Reserve/Reserve.styled';
import { ReserveCheck } from 'components/Reserve/ReserveCheck';
import { ReserveHighrise } from 'components/Reserve/ReserveHighrise';
import { useGetCurrentReserve } from 'components/Reserve/hooks/useGetCurrentReserve';
import { reserve } from 'components/Reserve/reserve';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const RESERVED_ADDRESSES = [...reserve].map((address) =>
    address.toLowerCase()
);
const PRIVATE_SALE_START = new Date(Date.UTC(2022, 3, 21, 15, 0, 0, 0));
const PRIVATE_SALE_END = new Date(Date.UTC(2022, 3, 21, 16, 0, 0, 0));
const PUBLIC_SALE_START = new Date(Date.UTC(2022, 3, 21, 17, 0, 0, 0));
const PUBLIC_SALE_END = new Date(Date.UTC(2022, 3, 21, 18, 0, 0, 0));

const AUCTIONS = [0, 15, 19];
const GIVEAWAYS = [4];

export const Reserve = () => {
    const { account } = useEthers();
    const { initHighrises } = useActiveHighriseContext();
    const { reservedAddresses } = useGetCurrentReserve();
    const [isWaiting, setIsWaiting] = useState(true);

    const hasReservedToken =
        account && reservedAddresses.includes(account.toLowerCase());

    useEffect(() => {
        const sto = setInterval(() => {
            const isPrivateSaleOngoing =
                account &&
                RESERVED_ADDRESSES.includes(account.toLowerCase()) &&
                new Date() > PRIVATE_SALE_START &&
                new Date() < PRIVATE_SALE_END;

            const isPublicSaleOngoing =
                new Date() > PUBLIC_SALE_START &&
                new Date() < PRIVATE_SALE_START;

            setIsWaiting(!(isPrivateSaleOngoing || isPublicSaleOngoing));
        }, 1000);

        return () => {
            clearInterval(sto);
        };
    }, [account]);

    return (
        <S.Reserve>
            <S.ReserveHeader>Reserve</S.ReserveHeader>
            <S.ReserveParagraph>
                Collectors of any Hythacg NFTs are eligible to reserve a
                highrise starting 4/21 11 AM EST. Collectors will have one hour
                to reserve and are limited to one highrise per collector. If any
                highrises are unclaimed by collectors, they will be released for
                public reserve 4/21 1 PM EST. To finalize the transfer of the
                Highrise NFT, private sales will be listed on Opensea for 1 ETH
                to reserved wallets.
            </S.ReserveParagraph>
            <S.ReserveCountdowns>
                <S.ReserveCountdownWrapper>
                    <div>Private reserve:&nbsp;</div>
                    <Countdown
                        countDownStart={PRIVATE_SALE_START}
                        countDownEnd={PRIVATE_SALE_END}
                        countDown
                        startedText="Now Open"
                        endedText="Closed"
                    />
                </S.ReserveCountdownWrapper>
                <S.ReserveCountdownWrapper>
                    <div>Public reserve:&nbsp;</div>
                    <Countdown
                        countDownStart={PUBLIC_SALE_START}
                        countDownEnd={PUBLIC_SALE_END}
                        startedText="Now Open"
                        endedText="Closed"
                    />
                </S.ReserveCountdownWrapper>
            </S.ReserveCountdowns>
            <ReserveCheck hasReservedToken={hasReservedToken} />
            <S.ReserveGrid>
                {initHighrises.current.map((highrise) => (
                    <ReserveHighrise
                        key={highrise.index}
                        hasReservedToken={hasReservedToken}
                        isAuction={AUCTIONS.includes(highrise.index)}
                        isGiveaway={GIVEAWAYS.includes(highrise.index)}
                        isLoading={!reservedAddresses}
                        isWaiting={isWaiting}
                        reservedAddress={
                            reservedAddresses?.[highrise.index] &&
                            reservedAddresses[highrise.index] !==
                                '0x0000000000000000000000000000000000000000'
                                ? reservedAddresses?.[highrise.index]
                                : undefined
                        }
                        highrise={highrise}
                    />
                ))}
            </S.ReserveGrid>
        </S.Reserve>
    );
};
