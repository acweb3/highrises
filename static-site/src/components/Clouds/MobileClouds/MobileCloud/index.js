import cloudSrc from 'assets/images/cloud.webp';
import * as S from 'components/Clouds/MobileClouds/MobileCloud/MobileCloud.styled';

export const MobileCloud = ({ styles: { scale, ...styles } }) => {
    return (
        <S.MobileCloud {...styles}>
            <S.MobileCloudImage scale={scale} src={cloudSrc} />
        </S.MobileCloud>
    );
};