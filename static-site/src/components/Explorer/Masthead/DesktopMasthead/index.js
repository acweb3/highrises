import { useChainConfig } from 'common/hooks/useChainConfig';
import { Story } from 'components/Explorer/Masthead/Attributes/Story';
import { Traits } from 'components/Explorer/Masthead/Attributes/Traits';
import { useTokenOwner } from 'components/Explorer/Masthead/Attributes/Traits/hooks/useTokenOwner';
import * as S from 'components/Explorer/Masthead/DesktopMasthead/DesktopMasthead.styled';
import { EthPrice } from 'components/Explorer/Masthead/Purchase/EthPrice';
import { PurchaseItem } from 'components/Explorer/Masthead/Purchase/PurchaseItem';
import { Box } from 'components/ui/Box';

export const DesktopMasthead = ({ activeHighrise }) => {
    const { openseaURL, contractAddress } = useChainConfig();
    const { hasOwner } = useTokenOwner({
        tokenId: activeHighrise?.index,
    });

    return (
        <Box isColumn>
            <S.DesktopMasthead>
                <S.TitleContainer>
                    <S.Title isActive>
                        {activeHighrise?.name ?? 'THE BUILDINGS'}
                    </S.Title>
                </S.TitleContainer>

                {activeHighrise && (
                    <S.DesktopMastheadColumns>
                        <S.DesktopMastheadColumn>
                            <PurchaseItem
                                copy="Signed and numbered, limited to 100 editions."
                                hasMinted
                                header="The Print"
                                buttonText="View Print"
                                href={`https://www.hythacg.com/prints/highrise${`${
                                    activeHighrise.index + 1
                                }`.padStart(2, '0')}`}
                                price="$100"
                                src={activeHighrise.posterSrc}
                            />
                            <Story activeHighrise={activeHighrise} />
                            <S.ExplorerNavigation
                                showMap
                                activeHighrise={activeHighrise}
                            />
                        </S.DesktopMastheadColumn>

                        <S.DesktopMastheadColumn>
                            <PurchaseItem
                                hasMinted={hasOwner}
                                href={`https://${openseaURL}.io/assets/${contractAddress}/${`${activeHighrise.index}`}`}
                                header="The NFT"
                                buttonText="View Secondary"
                                price={<EthPrice />}
                                copy="1/1 non-fungible token available on secondary."
                                src={activeHighrise.nftSrc}
                            />
                            <Traits activeHighrise={activeHighrise} />
                        </S.DesktopMastheadColumn>
                    </S.DesktopMastheadColumns>
                )}
            </S.DesktopMasthead>
        </Box>
    );
};
