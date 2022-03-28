import * as S from 'components/ContextFAB/ContextFAB.styled';
import { Web3Connect } from 'components/ContextFAB/Web3Connect';

export const ContextFAB = () => {
    return (
        <S.ContextFAB>
            <S.ContextFABLinks>
                <S.ContextFABButton
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://discord.gg/EEpXhmEy"
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
