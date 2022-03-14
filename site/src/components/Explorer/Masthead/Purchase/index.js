import * as S from 'components/Explorer/Masthead/Purchase/Purchase.styled';
import { PurchaseItem } from 'components/Explorer/Masthead/Purchase/PurchaseItem';

export const Purchase = ({ activeHighrise }) => {
    return (
        <S.Purchase>
            <PurchaseItem
                copy="Signed and numbered, limited to 100 editions."
                header="The Print"
                href={`https://www.hythacg.com/prints/highrise${`${
                    activeHighrise.index + 1
                }`.padStart(2, '0')}`}
                price="$100"
                src={activeHighrise.posterSrc}
            />
            <PurchaseItem
                disabled
                header="The NFT"
                price={
                    <div style={{ display: 'flex' }}>
                        0 <S.EthereumIcon />
                    </div>
                }
                copy="1/1 non-fungible token available on secondary."
                href={`https://www.hythacg.com/prints/highrise${`${
                    activeHighrise.index + 1
                }`.padStart(2, '0')}`}
            />
        </S.Purchase>
    );
};
