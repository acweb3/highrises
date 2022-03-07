import * as S from 'components/Team/Profile/Profile.styled';

export const Profile = ({ header, points, src }) => {
    return (
        <S.Profile>
            <S.ProfileImageWrapper>
                <S.ProfileImage src={src} />
            </S.ProfileImageWrapper>
            <S.ProfileHeader>{header}</S.ProfileHeader>
            {points.map((point) => {
                return <S.ProfileText key={point}>{point}</S.ProfileText>;
            })}
        </S.Profile>
    );
};
