import * as S from 'components/Explorer/Masthead/Purchase/PurchaseItem/PurchaseItem.styled';

export const PurchaseItem = ({ copy, disabled, header, href, price, src }) => {
    return (
        <S.PurchaseItem>
            <S.PurchaseHeader>{header}</S.PurchaseHeader>
            <S.PurchaseCopy>{copy}</S.PurchaseCopy>
            <S.PurchasePrice>{price}</S.PurchasePrice>
            {!disabled ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                >
                    <S.PurchaseImage src={src} />
                </a>
            ) : (
                <S.PurchaseDisabled>
                    <S.PurchaseComingSoon>Coming soon</S.PurchaseComingSoon>
                </S.PurchaseDisabled>
            )}
        </S.PurchaseItem>
    );
};
