import * as S from 'components/Explorer/Masthead/Collectibles/Collectibles.styled';
import { HoverDescription } from 'components/ui/HoverDescription';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { StaticImage } from 'gatsby-plugin-image';
import { forwardRef } from 'react';

export const Collectibles = forwardRef(({ isHeaderShowing = true }, ref) => {
    const { activeHighrise } = useActiveHighriseContext();

    // Kludge remove empire state building
    if (activeHighrise.index === 137) {
        return null;
    }

    return (
        <S.Collectibles ref={ref}>
            <S.CollectiblesHeader isHeaderShowing={isHeaderShowing}>
                Collectibles
            </S.CollectiblesHeader>

            <S.CollectiblesCopy isHeaderShowing={isHeaderShowing}>
                Explore products featuring this Highrise including graphic
                prints, phone wallpapers and NFTs!
            </S.CollectiblesCopy>

            <S.CollectiblesGrid>
                {activeHighrise.products
                    .filter((product) => product.productLink)
                    .map((product, index) => {
                        return (
                            <S.CollectibleWrapper
                                key={`${activeHighrise.name}--${index}`}
                                href={product.productLink}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <S.Collectible>
                                    {product.isNft && (
                                        <>
                                            <S.CollectibleNFTOverlay isDesktop>
                                                <HoverDescription
                                                    title={product.name}
                                                    css={`
                                                        width: 100%;
                                                    `}
                                                >
                                                    <StaticImage
                                                        src={
                                                            '../../../../assets/images/nft-overlay.webp'
                                                        }
                                                        placeholder="blurred"
                                                        alt=""
                                                    />
                                                </HoverDescription>
                                            </S.CollectibleNFTOverlay>

                                            <S.CollectibleNFTOverlay>
                                                <StaticImage
                                                    src={
                                                        '../../../../assets/images/nft-overlay.webp'
                                                    }
                                                    placeholder="blurred"
                                                    alt=""
                                                    css={`
                                                        width: 100%;
                                                    `}
                                                />
                                            </S.CollectibleNFTOverlay>
                                        </>
                                    )}

                                    <S.CollectibleSquare>
                                        <HoverDescription title={product.name}>
                                            <S.CollectibleImage
                                                blurSrc={product.blurSrc}
                                                src={product.productSrc}
                                            />
                                        </HoverDescription>
                                    </S.CollectibleSquare>
                                </S.Collectible>

                                <S.CollectibleName>
                                    {product.name}
                                </S.CollectibleName>
                            </S.CollectibleWrapper>
                        );
                    })}
            </S.CollectiblesGrid>
        </S.Collectibles>
    );
});
