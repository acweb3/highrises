import { useEthers } from '@usedapp/core';
import { useEffect, useState } from 'react';

export const useEnsAddress = (ethAddress) => {
    const ethers = useEthers();
    const [ens, setEns] = useState();

    useEffect(() => {
        (async () => {
            if (ethAddress) {
                const lookupEns = await ethers.library.lookupAddress(
                    ethAddress
                );

                setEns(lookupEns);
            }
        })();
    }, [ethers.library, ethAddress]);

    return ens;
};
