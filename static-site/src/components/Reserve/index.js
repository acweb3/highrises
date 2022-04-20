import { useEthers } from '@usedapp/core';
import { Countdown } from 'components/Countdown';
import * as S from 'components/Reserve/Reserve.styled';
import { ReserveCheck } from 'components/Reserve/ReserveCheck';
import { ReserveHighrise } from 'components/Reserve/ReserveHighrise';
import { useGetCurrentReserve } from 'components/Reserve/hooks/useGetCurrentReserve';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const RESERVED_ADDRESSES = [].map((address) => address.toLowerCase());
const PRIVATE_SALE = new Date(Date.UTC(2022, 3, 21, 15, 0, 0, 0));
const PUBLIC_SALE = new Date(Date.UTC(2022, 3, 21, 17, 0, 0, 0));

const AUCTIONS = [0, 15, 20];
const GIVEAWAYS = [4];

export const Reserve = () => {
    const { account } = useEthers();
    const { initHighrises } = useActiveHighriseContext();
    const { reservedAddresses } = useGetCurrentReserve();

    return (
        <S.Reserve>
            <S.ReserveHeader>Reserve</S.ReserveHeader>
            <S.ReserveParagraph>
                Collectors of any Hythacg NFTs are eligible to reserve a
                highrise starting 4/21 11 AM EST.
            </S.ReserveParagraph>
            <S.ReserveParagraph>
                Collectors will have one hour to reserve and are limited to one
                highrise per collector. If any highrises are unclaimed by
                collectors, they will be released for public sale 4/21 1 PM EST.
            </S.ReserveParagraph>
            <S.ReserveParagraph>
                To finalize the transfer of the Highrise NFT, private sales will
                be listed on Opensea for 1 ETH to reserved wallets.
            </S.ReserveParagraph>
            <S.ReserveCountdowns>
                <S.ReserveCountdownWrapper>
                    <div>Private reserve:</div>
                    <Countdown
                        countDownTarget={PRIVATE_SALE}
                        terminatedText="Now Open"
                    />
                </S.ReserveCountdownWrapper>
                <S.ReserveCountdownWrapper>
                    <div>Public reserve:</div>
                    <Countdown
                        countDownTarget={PUBLIC_SALE}
                        terminatedText="Now Open"
                    />
                </S.ReserveCountdownWrapper>
            </S.ReserveCountdowns>
            <ReserveCheck />
            <S.ReserveGrid>
                {initHighrises.current.map((highrise) => (
                    <ReserveHighrise
                        key={highrise.index}
                        isAuction={AUCTIONS.includes(highrise.index)}
                        isGiveaway={GIVEAWAYS.includes(highrise.index)}
                        isLoading={!reservedAddresses}
                        isWaiting={
                            (account &&
                                RESERVED_ADDRESSES.includes(
                                    account.toLowerCase()
                                ) &&
                                new Date() < PRIVATE_SALE) ||
                            new Date() < PUBLIC_SALE
                        }
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
