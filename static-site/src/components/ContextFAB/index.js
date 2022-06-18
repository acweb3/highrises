import { useEthers } from '@usedapp/core';
import { useWindowListener } from 'common/hooks/useWindowListener';
import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/ContextFAB/ContextFAB.styled';
import { HighriseIcon } from 'components/ContextFAB/HighriseIcon';
import { Web3Connect } from 'components/ContextFAB/Web3Connect';
import { useTokenHolder } from 'components/ContextFAB/hooks/useTokenHolder';
import throttle from 'lodash.throttle';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hack for getting token ids and preventing sending invalid call when no account is present.
 */
const Tokens = ({ setTokenIds }) => {
    const tokenIds = useTokenHolder();

    useEffect(() => {
        setTokenIds((oldTokenIds) => {
            if (oldTokenIds.length !== tokenIds.length) {
                return tokenIds;
            }

            return oldTokenIds;
        });
    }, [tokenIds]);

    return null;
};

export const ContextFAB = () => {
    const { isLoaded } = useWindowSize();
    const [hasInitialized, setHasInitialized] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [tokenIds, setTokenIds] = useState([]);
    const scrollRef = useRef(0);
    const { account } = useEthers();

    const throttleScroll = useCallback(
        throttle(() => {
            setIsVisible(
                // window.scrollY < 1500 || scrollRef.current > window.scrollY
                window.scrollY > 100 && scrollRef.current > window.scrollY
            );
            scrollRef.current = window.scrollY;
        }, 100),
        []
    );

    // useEffect(() => {
    //     const sto = setTimeout(() => {
    //         setHasInitialized(true);
    //     }, 15000);

    //     return () => {
    //         clearTimeout(sto);
    //     };
    // }, []);

    useWindowListener(
        'scroll',
        () => {
            throttleScroll();
        },
        [throttleScroll]
    );

    return (
        <S.ContextFAB
            isActive={tokenIds.length}
            isVisible={isLoaded && (!hasInitialized || isVisible)}
        >
            <S.ContextFABLinks>
                <S.ContextFABButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://discord.gg/meX2WS6Jjk"
                >
                    <S.DiscordLogo />
                </S.ContextFABButton>
                <S.ContextFABButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/hytha.cg"
                >
                    <S.InstagramLogo />
                </S.ContextFABButton>
                <S.ContextFABButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://opensea.io/collection/highrises"
                >
                    <S.OpenseaLogo />
                </S.ContextFABButton>
                <S.ContextFABButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://mobile.twitter.com/Hythacg"
                >
                    <S.TwitterLogo />
                </S.ContextFABButton>
            </S.ContextFABLinks>
            {/* {
                <Web3Connect tokenIds={tokenIds} />
            } */}
            {tokenIds.length ? (
                <S.ContextFABIcons>
                    {tokenIds.map((tokenId) => (
                        <HighriseIcon key={tokenId} tokenId={tokenId} />
                    ))}
                </S.ContextFABIcons>
            ) : (
                <Web3Connect />
            )}
            {account && <Tokens setTokenIds={setTokenIds} />}
        </S.ContextFAB>
    );
};
