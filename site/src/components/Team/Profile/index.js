import * as S from 'components/Team/Profile/Profile.styled';

export const Profile = ({ header, title, copy, socials, src }) => {
    return (
        <S.Profile>
            <S.ProfileImageWrapper>
                <S.ProfileImage src={src} />
            </S.ProfileImageWrapper>
            <S.ProfileHeader>{header}</S.ProfileHeader>
            <S.ProfileTitle>{title}</S.ProfileTitle>
            <S.ProfileText>{copy}</S.ProfileText>
            <S.ProfileSocials>{socials}</S.ProfileSocials>
        </S.Profile>
    );
};
