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
    // const { reservedAddresses } = useGetCurrentReserve();
    const reservedAddresses = [
        '0x0000000000000000000000000000000000000000',
        '0xf5cf9fed4c8a27c405700abf6c78c70fb6647b27',
        '0x70fd4082e65d044bf8d57f64a8875c238f00fb64',
        '0x7b23803d74dbe3a421937de98887c3521de59a54',
        '0x0000000000000000000000000000000000000000',
        '0xa098702bf910bad1c7aabb623bda47495c4752eb',
        '0xd6a99b5a04bd6cae7d18c8f519dc424b060ac1ab',
        '0xb6cf777e3696a502107417265c92d1b075636a10',
        '0x51fee9bf45c5dab188b57048658696edab9d72cf',
        '0x04d03ef51dc47ce6ed09945c7114dc149ed13b29',
        '0x418cd73af8131dc641c7a79147ff41741317f9a3',
        '0x274c821ddfa5fd5ce2c054f6fe854891e9f49e56',
        '0xecb1165bae717f58ae71221a687b6c09cc43c504',
        '0xb0d4a61ab14e6c73df8ec47c5f2b9c039605bd87',
        '0x8a0c2c38e68b102042012990e00e576111d376e4',
        '0x0000000000000000000000000000000000000000',
        '0x321ed5739440bdbd731d54a19aa20b18398d374f',
        '0x39d4051256995f8e7e2c9e383e73d37b44ccc2ca',
        '0x81a0d1736382ccc37c54022350d44fb5d50d01bd',
        '0x0000000000000000000000000000000000000000',
    ];
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
                new Date() > PUBLIC_SALE_START && new Date() < PUBLIC_SALE_END;

            setIsWaiting(!(isPrivateSaleOngoing || isPublicSaleOngoing));
        }, 1000);

        return () => {
            clearInterval(sto);
        };
    }, [account]);

    return (
        <S.Reserve>
            <S.ReserveHeader>Sold Out</S.ReserveHeader>
            <S.ReserveParagraph>
                The first drop of highrises has been reserved out to collectors.
                There will be no public release of this drop.
            </S.ReserveParagraph>
            {/* <S.ReserveParagraph>
                Collectors of any Hythacg NFTs are eligible to reserve a
                highrise starting 4/21 11 AM EST. Collectors will have one hour
                to reserve and are limited to one highrise per collector. If any
                highrises are unclaimed by collectors, they will be released for
                public reserve 4/21 1 PM EST. To finalize the transfer of the
                Highrise NFT, private sales will be listed on Opensea for 1 ETH
                to reserved wallets.
            </S.ReserveParagraph> */}
            {/* <S.ReserveCountdowns>
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
            <ReserveCheck hasReservedToken={hasReservedToken} /> */}
            <S.ReserveGrid>
                {initHighrises.current.map((highrise) => (
                    <ReserveHighrise
                        key={highrise.index}
                        hasReservedToken={hasReservedToken}
                        isAuction={AUCTIONS.includes(highrise.index)}
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
