import blueSkyBackgroundSrc from 'assets/images/blue-sky-background.jpg';
import * as S from 'components/Sky/Sky.styled';

export const Sky = ({ className }) => {
    return <S.Sky className={className} src={blueSkyBackgroundSrc} />;
};
