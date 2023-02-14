import * as S from 'components/Explorer/Masthead/Collectibles/Collectibles.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { StaticImage } from 'gatsby-plugin-image';
import { forwardRef } from 'react';

export const Collectibles = forwardRef((_, ref) => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <S.Collectibles ref={ref}>
            <S.CollectiblesHeader>Collectibles</S.CollectiblesHeader>

            <S.CollectiblesCopy>
                Explore products featuring this Highrise including graphic
                prints, phone wallpapers and NFTs!
            </S.CollectiblesCopy>

            <S.CollectiblesGrid>
                {activeHighrise.products
                    .filter((product) => product.productLink)
                    .map((product) => (
                        <S.Collectible
                            href={product.productLink}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {product.isNft && (
                                <S.CollectibleNFTOverlay>
                                    <StaticImage
                                        src={
                                            '../../../../assets/images/nft-overlay.webp'
                                        }
                                        placeholder="blurred"
                                        alt=""
                                    />
                                </S.CollectibleNFTOverlay>
                            )}

                            <S.CollectibleSquare>
                                <S.CollectibleImage
                                    blurSrc={product.blurSrc}
                                    src={product.productSrc}
                                />
                            </S.CollectibleSquare>
                        </S.Collectible>
                    ))}
            </S.CollectiblesGrid>
        </S.Collectibles>
    );
});
