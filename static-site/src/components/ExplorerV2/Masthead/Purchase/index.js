import { useChainConfig } from 'common/hooks/useChainConfig';
import { EthPrice } from 'components/ExplorerV2/Masthead/Purchase/EthPrice';
import * as S from 'components/ExplorerV2/Masthead/Purchase/Purchase.styled';
import { PurchaseItem } from 'components/ExplorerV2/Masthead/Purchase/PurchaseItem';
import { useTokenOwner } from 'components/ExplorerV2/Masthead/Traits/hooks/useTokenOwner';

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
