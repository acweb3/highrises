import cloudSrc from 'assets/images/cloud.png';
import * as S from 'components/Cloud/Cloud.styled';

export const MobileCloud = ({ styles }) => {
    return (
        <S.MobileCloudWrapper>
            <S.MobileCloud isLoaded {...styles}>
                <S.CloudImage src={cloudSrc} />
            </S.MobileCloud>
        </S.MobileCloudWrapper>
    );
};
