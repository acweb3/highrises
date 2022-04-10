import { useChainConfig } from 'common/hooks/useChainConfig';
import { EthPrice } from 'components/Explorer/Masthead/Purchase/EthPrice';
import * as S from 'components/Explorer/Masthead/Purchase/Purchase.styled';
import { PurchaseItem } from 'components/Explorer/Masthead/Purchase/PurchaseItem';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Purchase = ({ className, isCentered, isFullPage }) => {
    const { activeHighrise } = useActiveHighriseContext();
    const { openseaURL, contractAddress } = useChainConfig();

    return (
        <S.Purchase className={className}>
            <PurchaseItem
                copy="Signed and numbered, limited to 100 editions."
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
                disabled={!activeHighrise.nftSrc}
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
