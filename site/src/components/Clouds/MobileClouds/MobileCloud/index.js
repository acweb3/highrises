import cloudSrc from 'assets/images/cloud.png';
import * as S from 'components/Clouds/MobileClouds/MobileCloud/MobileCloud.styled';

export const MobileCloud = ({ styles: { scale, ...styles } }) => {
    console.log({
        styles,
        scale,
    });
    return (
        <S.MobileCloud {...styles}>
            <S.MobileCloudImage scale={scale} src={cloudSrc} />
        </S.MobileCloud>
    );
};
