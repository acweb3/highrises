import * as S from 'components/Collage/Collage.styled';
import { Paragraph } from 'components/ui/Paragraph';
import { StaticImage } from 'gatsby-plugin-image';

export const Collage = ({ isIndex }) => {
    return (
        <S.Collage>
            <S.CollageImage>
                <StaticImage
                    src={'../../assets/images/collage.webp'}
                    alt=""
                    placeholder="blurred"
                />
            </S.CollageImage>
            <S.CollageCard>
                <S.CollageHeader>The Northeast Collage</S.CollageHeader>
                {isIndex ? (
                    <>
                        <Paragraph>
                            This colorful poster features a collage of historic
                            highrises in 18 cities across the Northeastern
                            United States. Decorate your space with 100-year-old
                            landmarks from Philadelphia, Boston, Baltimore,
                            Newark, Pittsburgh, Buffalo, and more!
                        </Paragraph>

                        <S.CollageButtons>
                            <S.CollageButton
                                href="https://www.hythacg.com/prints/northeastcollage"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Mint
                            </S.CollageButton>
                            <S.CollageSubtext>
                                100/100 remaining
                            </S.CollageSubtext>
                        </S.CollageButtons>
                    </>
                ) : (
                    <>
                        <Paragraph
                            css={`
                                font-weight: 100;
                            `}
                        >
                            This colorful poster features a collage of historic
                            highrises in 18 cities across the Northeastern
                            United States. Decorate your space with 100-year-old
                            landmarks from Philadelphia, Boston, Baltimore,
                            Newark, Pittsburgh, Buffalo, and more!
                        </Paragraph>

                        <S.CollageButtons>
                            <S.CollageExternalLink
                                href="https://www.hythacg.com/prints/northeastcollage"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Poster Print
                            </S.CollageExternalLink>
                            <S.CollageLink to="/collage">
                                Digital Collectible
                            </S.CollageLink>
                        </S.CollageButtons>
                    </>
                )}
            </S.CollageCard>
        </S.Collage>
    );
};
