import { useEthers, shortenAddress } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { useEnsAddress } from 'common/hooks/useEnsAddress';
import * as S from 'components/Reserve/ReserveHighrise/ReserveHighrise.styled';
import { useReserve } from 'components/Reserve/hooks/useReserve';

const getReservedText = ({ isAuction, isGiveaway, isReserved }) => {
    if (isAuction) {
        return 'Auction';
    }

    if (isGiveaway) {
        return 'Giveaway';
    }

    if (isReserved) {
        return 'Reserved';
    }

    return undefined;
};

export const ReserveHighriseButton = ({ isActive, tokenId }) => {
    const { reserve } = useReserve({ tokenId });
    return (
        <S.ReserveHighriseButton
            isActive={isActive}
            onClick={isActive ? reserve : undefined}
        >
            Reserve
        </S.ReserveHighriseButton>
    );
};

export const ReserveHighrise = ({
    highrise,
    hasReservedToken,
    isAuction,
    isGiveaway,
    isReserved,
    isLoading,
    isWaiting,
    reservedAddress,
}) => {
    const { activateBrowserWallet, account } = useEthers();
    const { openseaURL, contractAddress } = useChainConfig();
    const reservedMessage = getReservedText({
        isAuction,
        isGiveaway,
        isReserved: isReserved || reservedAddress,
    });
    const ens = useEnsAddress(reservedAddress);

    const isActive =
        !reservedAddress && !isAuction && !isGiveaway && !isReserved;
    const isReservedByYou =
        reservedAddress &&
        account &&
        reservedAddress.toLowerCase() === account.toLowerCase();

    return (
        <S.ReserveHighrise isActive={isActive}>
            <S.ReserveHighriseLink
                href={`https://${openseaURL}.io/assets/${contractAddress}/${highrise.index}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {reservedMessage && (
                    <S.ReserveHighriseMessage isReservedByYou={isReservedByYou}>
                        {reservedMessage}
                    </S.ReserveHighriseMessage>
                )}
                {reservedAddress && (
                    <>
                        {isReservedByYou && <S.ReserveHighriseCheckmark />}
                        <S.ReserveHighriseMessage
                            isReservedAddress
                            isReservedByYou={isReservedByYou}
                        >
                            {isReservedByYou
                                ? 'BY YOU'
                                : `BY ${
                                      ens || shortenAddress(reservedAddress)
                                  }`}
                        </S.ReserveHighriseMessage>
                    </>
                )}
                <S.ReserveHighriseImage
                    src={highrise.nftSrc}
                    alt={highrise.name}
                />
            </S.ReserveHighriseLink>
            {(() => {
                if (account) {
                    return (
                        <ReserveHighriseButton
                            isActive={
                                isActive &&
                                !isLoading &&
                                !isWaiting &&
                                !hasReservedToken
                            }
                            tokenId={highrise.index}
                        />
                    );
                }

                if (isLoading) {
                    return (
                        <S.ReserveHighriseButton
                            onClick={activateBrowserWallet}
                        >
                            Loading
                        </S.ReserveHighriseButton>
                    );
                }

                return (
                    <S.ReserveHighriseButton onClick={activateBrowserWallet}>
                        Connect to Reserve
                    </S.ReserveHighriseButton>
                );
            })()}
        </S.ReserveHighrise>
    );
};
