import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/Explorer/Masthead/Purchase/PurchaseItem/PurchaseItem.styled';

const Asset = ({ children }) => {
    const { isSmallish } = useWindowSize();

    return (
        <>
            {isSmallish ? (
                <>{children}</>
            ) : (
                <S.PurchaseItemAsset className="xxx">
                    {children}
                </S.PurchaseItemAsset>
            )}
        </>
    );
};

export const PurchaseItem = ({
    buttonText,
    copy,
    disabled,
    header,
    href,
    isCentered,
    isFullPage,
    price,
    src,
}) => {
    return (
        <S.PurchaseItem isCentered={isCentered}>
            <S.PurchaseHeader>{header}</S.PurchaseHeader>
            <S.PurchaseCopy>{copy}</S.PurchaseCopy>
            <Asset>
                <S.PurchasePrice>{price}</S.PurchasePrice>
                {!disabled ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <S.PurchaseImage src={src} isFullPage={isFullPage} />
                    </a>
                ) : (
                    <S.PurchaseDisabled isFullPage={isFullPage}>
                        <S.PurchaseComingSoon>Coming soon</S.PurchaseComingSoon>
                    </S.PurchaseDisabled>
                )}
                {!isFullPage && (
                    <S.PurchaseExternalLink
                        buttonText={buttonText}
                        href={href}
                    />
                )}
            </Asset>
        </S.PurchaseItem>
    );
};
