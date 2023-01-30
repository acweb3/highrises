import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const FeatureImage = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <S.FeatureImageWrapper>
            <S.FeatureImage
                src={activeHighrise.featureSrc}
                blurSrc={activeHighrise.blurFeatureSrc}
                alt={`${activeHighrise.name} feature image`}
            />
        </S.FeatureImageWrapper>
    );
};
