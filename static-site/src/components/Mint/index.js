import { useCall, useEthers } from '@usedapp/core';
import {
    default as detroitBannerMobileSrc,
    default as detroitBannerSrc,
} from 'assets/images/blue-graph-paper.jpg';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { Paragraph } from 'components/Explorer/Masthead/EmailCollection/EmailCollection.styled';
import * as S from 'components/Mint/Mint.styled';
import { useMint } from 'components/Mint/hooks/useMint';
import { BaseButton } from 'components/ui/BaseButton';
import { Header } from 'components/ui/Header';
import { useEffect, useState } from 'react';

export const Countdown = ({ countDownStart, startedText }) => {
    const [countdown, setCountdown] = useState('');
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const sti = setInterval(() => {
            const now = new Date();
            const diff = countDownStart.valueOf() - now.valueOf();

            const days = Math.max(Math.floor(diff / 1000 / 60 / 60 / 24), 0);
            const hours = Math.max(Math.floor(diff / 1000 / 60 / 60) % 24, 0);
            const minutes = Math.max(Math.floor(diff / 1000 / 60) % 60, 0);
            const seconds = Math.max(Math.floor(diff / 1000) % 60, 0);

            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                setIsStarted(true);
            }

            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => {
            clearInterval(sti);
        };
    }, [countDownStart]);

    return (
        <S.Countdown isActive={Boolean(countdown)}>
            {(() => {
                if (isStarted) {
                    return startedText;
                }

                return countdown;
            })()}
        </S.Countdown>
    );
};

const TOKENS = [
    95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111,
];

export const Mint = () => {
    const { isMinting, mint, error, token } = useMint();
    const [isLive, setIsLive] = useState(false);
    const { account, activateBrowserWallet } = useEthers();

    const { contract } = useChainConfig();
    const hythaTokensCall = useCall({
        contract,
        method: 'tokensOfOwner',
        args: ['0xb79c26fafaafeb2835ff175d025db1b9deeedf5e'],
    });

    const hythaTokens =
        hythaTokensCall?.value?.[0].map((token) => token.toNumber()) ?? [];
    const remainingTokens = TOKENS.filter((token) =>
        hythaTokens.includes(token)
    );
    const isMintedOut = !remainingTokens.length;

    useEffect(() => {
        const sti = setInterval(() => {
            setIsLive(
                new Date('2023-04-12T12:00:00.000-04:00').valueOf() <
                    new Date().valueOf()
            );
        }, 1000);

        return () => {
            clearInterval(sti);
        };
    }, []);

    return (
        <S.Mint>
            <S.MintBackgroundMobile src={detroitBannerMobileSrc} />
            <S.MintBackgroundDesktop src={detroitBannerSrc} />

            <S.MintBlurb>
                <Header>NFT Release</Header>

                <Paragraph
                    css={`
                        text-align: center;
                        margin-top: 16px;
                    `}
                >
                    16 Highrises will be available for a ½ price (.5 ETH) blind
                    mint. The Mint Window will open 4/12 at 12pm EST, and will
                    close in 24 hours. After the mint window closes, remaining
                    Highrises will be available for 1 ETH on Opensea.
                </Paragraph>

                {!isLive && (
                    <>
                        <Header
                            css={`
                                margin-top: 32px;
                            `}
                            smaller
                        >
                            Mint Window Opens In:
                        </Header>

                        <Paragraph
                            css={`
                                text-align: center;
                                margin-top: 0;
                            `}
                        >
                            <Countdown
                                countDownStart={
                                    new Date('2023-04-12T12:00:00.000-04:00')
                                }
                            />
                        </Paragraph>
                    </>
                )}

                {!token && (
                    <>
                        <BaseButton
                            css={`
                                margin-top: 32px;
                            `}
                            isActive={isMinting}
                            disabled={!isLive || isMintedOut}
                            onClick={() => {
                                if (isLive && account) {
                                    mint();
                                }

                                if (isLive) {
                                    activateBrowserWallet();
                                }
                            }}
                        >
                            {(() => {
                                // if (isMintedOut) {
                                //     return 'Sold Out';
                                // }

                                if (isMinting) {
                                    return 'Minting';
                                }

                                if (isLive && account) {
                                    return 'Mint';
                                }

                                if (isLive) {
                                    return 'Connect';
                                }

                                return 'Soon';
                            })()}
                        </BaseButton>

                        <Paragraph
                            css={`
                                font-style: italic;
                                font-size: 0.75rem;
                            `}
                        >
                            {remainingTokens.length} Highrises are still
                            remaining
                        </Paragraph>
                    </>
                )}

                {token && (
                    <a
                        css={`
                            margin-top: 32px;
                        `}
                        href={'https://opensea.io/collection/highrises'}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <BaseButton>Your Highrise</BaseButton>
                    </a>
                )}

                {error && (
                    <Paragraph
                        css={`
                            color: red;
                        `}
                    >
                        {error}
                    </Paragraph>
                )}
            </S.MintBlurb>
        </S.Mint>
    );
};
