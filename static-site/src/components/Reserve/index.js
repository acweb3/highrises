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
const PRIVATE_SALE_START = new Date(Date.UTC(2022, 7, 11, 16, 0, 0, 0));
const PRIVATE_SALE_END = new Date(Date.UTC(2022, 7, 11, 18, 0, 0, 0));

const AUCTIONS = [0, 15, 19, 21, 29, 44, 47];
const GIVEAWAYS = [4, 31];
const RESERVED = [23, 37];

export const Reserve = ({ className }) => {
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

            setIsWaiting(!isPrivateSaleOngoing);
        }, 1000);

        return () => {
            clearInterval(sto);
        };
    }, [account]);

    return (
        <S.Reserve className={className}>
            <S.ReserveHeader>Reserve</S.ReserveHeader>

            <S.ReserveParagraph>
                Collectors of any Hythacg NFTs are eligible to reserve a
                Highrise starting 8/11 1 PM EST. Collectors will have one hour
                to reserve and are limited to one Highrise per collector. If any
                highrises are unclaimed by collectors, they will be released for
                public reserve 8/11 3 PM EST at 1.5 ETH. To finalize the
                transfer of the Highrise NFT, private sales will be listed on
                Opensea for 1 ETH to reserved wallets at 8/11 3PM EST.
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
                {/* <S.ReserveCountdownWrapper>
                    <div>Public sale:&nbsp;</div>
                    <Countdown
                        countDownStart={PUBLIC_SALE_START}
                        countDownEnd={PUBLIC_SALE_END}
                        startedText="Now Open"
                        endedText="Closed"
                    />
                </S.ReserveCountdownWrapper> */}
            </S.ReserveCountdowns>
            <ReserveCheck hasReservedToken={hasReservedToken} />
            <S.ReserveGrid>
                {initHighrises.current.slice(35, 50).map((highrise) => (
                    <ReserveHighrise
                        key={highrise.index}
                        hasReservedToken={hasReservedToken}
                        isAuction={AUCTIONS.includes(highrise.index)}
                        isReserved={RESERVED.includes(highrise.index)}
                        isGiveaway={GIVEAWAYS.includes(highrise.index)}
                        isLoading={!reservedAddresses.length}
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
