import { useWindowListener } from 'common/hooks/useWindowListener';
import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/ContextFAB/ContextFAB.styled';
import { Web3Connect } from 'components/ContextFAB/Web3Connect';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export const ContextFAB = () => {
    const { isLoaded } = useWindowSize();
    const [isVisible, setIsVisible] = useState(false);
    const [debouncedIsVisible] = useDebounce(isVisible);

    useWindowListener(
        'scroll',
        () => {
            setIsVisible(window.scrollY > 100);
        },
        []
    );

    return (
        <S.ContextFAB isVisible={isLoaded && debouncedIsVisible}>
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
            <Web3Connect />
        </S.ContextFAB>
    );
};
