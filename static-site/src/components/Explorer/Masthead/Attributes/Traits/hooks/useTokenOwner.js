import { useCall, useEthers, shortenAddress } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { useEffect, useRef, useState } from 'react';

export const useTokenOwner = ({ tokenId }) => {
    const { contract, openseaURL } = useChainConfig();
    const [ens, setEns] = useState();
    const ownerOf = useCall({
        contract,
        method: 'ownerOf',
        args: [tokenId],
    });
    const ethers = useEthers();
    const hasCheckedEns = useRef(false);

    const ethAddress = ownerOf?.value[0];

    useEffect(() => {
        (async () => {
            if (ethAddress & !hasCheckedEns.current) {
                hasCheckedEns.current = true;
                const lookupEns = await ethers.library.lookupAddress(
                    ethAddress
                );

                setEns(lookupEns);
            }
        })();
    }, [ethers.library, ethAddress]);

    return {
        isCurrentOwner: ethers.account && ethAddress === ethers.account,
        hasOwner: Boolean(ethAddress),
        tokenOwnerAddress: Boolean(ens || ethAddress) ? (
            <a
                href={`https://${openseaURL}.io/${ethAddress}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {ens || shortenAddress(ethAddress)}
            </a>
        ) : undefined,
    };
};
