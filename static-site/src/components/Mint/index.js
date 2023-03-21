import detroitBannerMobileSrc from 'assets/images/detroit-banner-mobile.jpg';
import detroitBannerSrc from 'assets/images/detroit-banner.jpg';
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

export const Mint = () => {
    const mint = useMint();

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
                    8 Detroit Highrises will be available for a ½ price (.5 ETH)
                    blind mint. The Mint Window will open 3/21 at 12pm EST, and
                    will close in 24 hours. After the mint window closes,
                    remaining Highrises will be available for 1 ETH on Opensea.
                </Paragraph>

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
                            new Date('2023-03-21T12:00:00.000-04:00')
                        }
                    />
                </Paragraph>

                <BaseButton
                    css={`
                        margin-top: 32px;
                    `}
                    disabled
                >
                    Mint
                </BaseButton>
            </S.MintBlurb>
        </S.Mint>
    );
};
