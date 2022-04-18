import { useWindowListener } from 'common/hooks/useWindowListener';
import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/ContextFAB/ContextFAB.styled';
import { Web3Connect } from 'components/ContextFAB/Web3Connect';
import { useTokenHolder } from 'components/ContextFAB/hooks/useTokenHolder';
import throttle from 'lodash.throttle';
import { useCallback, useRef, useState } from 'react';

export const ContextFAB = () => {
    const { isLoaded } = useWindowSize();
    const [isVisible, setIsVisible] = useState(false);
    const tokenIds = useTokenHolder();
    const scrollRef = useRef(0);

    const throttleScroll = useCallback(
        throttle(() => {
            setIsVisible(
                window.scrollY > 100 && scrollRef.current > window.scrollY
            );
            scrollRef.current = window.scrollY;
        }, 100),
        []
    );

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
            isVisible={isLoaded && isVisible}
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
                <S.ContextFABButton isInactive>
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
            <Web3Connect tokenIds={tokenIds} />
        </S.ContextFAB>
    );
};
