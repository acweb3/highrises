import { shortenAddress, useCall, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { useEnsAddress } from 'common/hooks/useEnsAddress';

export const useTokenOwner = ({ tokenId }) => {
    const { contract, getOpenseaEthURL } = useChainConfig();
    const ownerOf = useCall({
        contract,
        method: 'ownerOf',
        args: [tokenId],
    });
    const ethers = useEthers();

    const ethAddress = ownerOf?.value?.[0];
    const ens = useEnsAddress(ethAddress);

    return {
        isCurrentOwner: ethers.account && ethAddress === ethers.account,
        hasOwner: Boolean(ethAddress),
        tokenOwnerAddress: Boolean(ens || ethAddress) ? (
            <a
                href={getOpenseaEthURL(ethAddress)}
                target="_blank"
                rel="noopener noreferrer"
            >
                {ens || shortenAddress(ethAddress)}
            </a>
        ) : undefined,
    };
};
