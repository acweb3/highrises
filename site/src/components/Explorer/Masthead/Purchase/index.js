import { useChainConfig } from 'common/hooks/useChainConfig';
import { useTokenOwner } from 'components/Explorer/Masthead/Attributes/Traits/hooks/useTokenOwner';
import { EthPrice } from 'components/Explorer/Masthead/Purchase/EthPrice';
import * as S from 'components/Explorer/Masthead/Purchase/Purchase.styled';
import { PurchaseItem } from 'components/Explorer/Masthead/Purchase/PurchaseItem';

export const Purchase = ({
    activeHighrise,
    className,
    isCentered,
    isFullPage,
}) => {
    const { openseaURL, contractAddress } = useChainConfig();
    const { hasOwner } = useTokenOwner({
        tokenId: activeHighrise.index,
    });

    return (
        <S.Purchase className={className}>
            <PurchaseItem
                copy="Signed and numbered, limited to 100 editions."
                hasMinted
                header="The Print"
                buttonText="View Print"
                href={`https://www.hythacg.com/prints/highrise${`${
                    activeHighrise.index + 1
                }`.padStart(2, '0')}`}
                isCentered={isCentered}
                isFullPage={isFullPage}
                price="$100"
                src={activeHighrise.posterSrc}
            />
            <PurchaseItem
                hasMinted={hasOwner}
                href={`https://${openseaURL}.io/assets/${contractAddress}/${`${activeHighrise.index}`}`}
                header="The NFT"
                buttonText="View Secondary"
                isCentered={isCentered}
                isFullPage={isFullPage}
                price={<EthPrice />}
                copy="1/1 non-fungible token available on secondary."
                src={activeHighrise.nftSrc}
            />
        </S.Purchase>
    );
};
