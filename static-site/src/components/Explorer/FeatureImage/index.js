import buildingImage from 'assets/images/building-center-panel-test/feature-image.jpg';
import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';

export const FeatureImage = () => {
    return (
        <S.FeatureImageWrapper>
            <S.FeatureImage src={buildingImage} alt="building image" />
        </S.FeatureImageWrapper>
    );
};
