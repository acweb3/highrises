import * as S from 'components/BuildingDetail/MembersArea/MembersArea.styled';
import { useTokenOwner } from 'components/Explorer/Masthead/Attributes/Traits/hooks/useTokenOwner';

export const MembersArea = ({ activeHighrise }) => {
    const { isCurrentOwner } = useTokenOwner({ tokenId: activeHighrise.index });

    if (!isCurrentOwner) {
        return null;
    }

    return (
        <S.MembersArea>
            <S.MembersAreaHeader>Members</S.MembersAreaHeader>
            <S.MembersAreaCopy>
                Coming soon: ownership of highrises NFTs entitles you to
                members-only benefits!
            </S.MembersAreaCopy>
        </S.MembersArea>
    );
};
