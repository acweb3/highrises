import * as S from 'components/Explorer/Masthead/Team/Profile/Profile.styled';

export const Profile = ({
    header,
    title,
    copy,
    socials,
    src,
    onClick,
    isActive,
}) => {
    return (
        <S.ProfileRow
            onClick={onClick}
            css={`
                cursor: pointer;
            `}
        >
            <S.ProfileColumn>
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
                {isActive && <S.ProfileText>{copy}</S.ProfileText>}
            </S.ProfileColumn>
        </S.ProfileRow>
    );
};
