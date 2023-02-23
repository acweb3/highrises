import * as S from 'components/Explorer/Masthead/Team/Profile/Profile.styled';

export const Profile = ({ header, title, copy, socials, src }) => {
    return (
        <S.ProfileRow>
            <S.Profile>
                <S.ProfileImageWrapper>
                    <img src={src} />
                </S.ProfileImageWrapper>
                <S.ProfileColumn>
                    <S.ProfileHeader>{header}</S.ProfileHeader>
                    <S.ProfileTitle>{title}</S.ProfileTitle>

                    <S.ProfileSocials>{socials}</S.ProfileSocials>
                </S.ProfileColumn>
            </S.Profile>
            {/* <S.ProfileText>{copy}</S.ProfileText> */}
        </S.ProfileRow>
    );
};
