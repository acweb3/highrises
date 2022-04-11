import { useCall, useEthers, shortenAddress } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { useEffect, useState } from 'react';

export const useTokenOwner = ({ tokenId }) => {
    const { contract, openseaURL } = useChainConfig();
    const [ens /*setEns*/] = useState();
    const ownerOf = useCall({
        contract,
        method: 'ownerOf',
        args: [tokenId],
    });
    const ethers = useEthers();

    const ethAddress = ownerOf?.value[0];

    useEffect(() => {
        (async () => {
            // const lookupEns = await (ownerOf &&
            //     ethers.library.lookupAddress(ownerOf));
            // setEns(lookupEns);
        })();
    }, [ethers.library, ownerOf]);

    return {
        isCurrentOwner: ethers.account && ethAddress === ethers.account,
        hasOwner: !!ethAddress,
        tokenOwnerAddress: !!(ens || ethAddress) ? (
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
