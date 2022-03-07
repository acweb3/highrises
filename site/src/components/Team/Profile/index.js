import * as S from 'components/Team/Profile/Profile.styled';

export const Profile = ({ header, points }) => {
    return (
        <S.Profile>
            <S.ProfileImage />
            <S.ProfileHeader>{header}</S.ProfileHeader>
            {points.map((point) => {
                return <S.ProfileText key={point}>{point}</S.ProfileText>;
            })}
        </S.Profile>
    );
};
