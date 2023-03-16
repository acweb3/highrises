import detroitBannerMobileSrc from 'assets/images/detroit-banner-mobile.jpg';
import detroitBannerSrc from 'assets/images/detroit-banner.jpg';
import { Paragraph } from 'components/Explorer/Masthead/EmailCollection/EmailCollection.styled';
import * as S from 'components/Mint/Mint.styled';
import { BaseButton } from 'components/ui/BaseButton';
import { Header } from 'components/ui/Header';

export const Mint = () => {
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
                    XXX
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
