import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/Explorer/Masthead/Purchase/PurchaseItem/PurchaseItem.styled';

const Asset = ({ children, isFullPage }) => {
    const { isSmallish } = useWindowSize();

    return (
        <>
            {isSmallish ? (
                <>{children}</>
            ) : (
                <S.PurchaseItemAsset isFullPage={isFullPage}>
                    {children}
                </S.PurchaseItemAsset>
            )}
        </>
    );
};

export const PurchaseItem = ({
    buttonText,
    copy,
    hasMinted,
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
            <Asset isFullPage={isFullPage}>
                <S.PurchasePrice>{price}</S.PurchasePrice>
                {hasMinted ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <S.PurchaseImage src={src} isFullPage={isFullPage} />
                    </a>
                ) : (
                    <S.PurchaseImage src={src} isFullPage={isFullPage} />
                )}
                {!isFullPage && (
                    <>
                        {hasMinted ? (
                            <S.PurchaseExternalLink
                                buttonText={buttonText}
                                href={href}
                            />
                        ) : (
                            <S.PurchaseExternalLinkDisabled>
                                {buttonText}
                            </S.PurchaseExternalLinkDisabled>
                        )}
                    </>
                )}
            </Asset>
        </S.PurchaseItem>
    );
};
