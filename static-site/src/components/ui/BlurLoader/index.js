import * as S from 'components/ui/BlurLoader/BlurLoader.styled';
import { useState } from 'react';

export const BlurLoader = ({ blurSrc, src, className, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <S.BlurLoader className={className}>
            {!isLoaded && <S.BlurLoaderBlurry src={blurSrc} alt={alt} />}
            <img src={src} alt={alt} onLoad={() => setIsLoaded(true)} />
        </S.BlurLoader>
    );
};
