import * as S from 'components/BuildingDetail/MembersArea/MembersArea.styled';
import { useTokenOwner } from 'components/Explorer/Masthead/Attributes/Traits/hooks/useTokenOwner';
import { BaseButton } from 'components/ui/BaseButton';

export const MembersArea = ({ activeHighrise }) => {
    const { isCurrentOwner } = useTokenOwner({ tokenId: activeHighrise.index });

    if (!isCurrentOwner) {
        return (
            <S.MembersLock>
                <S.MembersAreaDescription>
                    <S.MembersLockedIcon />
                    <S.MembersLockedHeader>Collectors</S.MembersLockedHeader>
                    <S.MembersLockedCopy>
                        Highrise NFT collectors can connect their wallet to
                        access all raw, Photoshop, full res files and archival
                        images featuring their Highrise.
                    </S.MembersLockedCopy>
                </S.MembersAreaDescription>
            </S.MembersLock>
        );
    }

    return (
        <S.MembersLock>
            <S.MembersAreaDescription>
                <S.MembersUnlockedIcon />
                <S.MembersLockedHeader>Collectors</S.MembersLockedHeader>
                <S.MembersLockedCopy>
                    Highrise NFT collectors can connect their wallet to access
                    all raw, Photoshop, full res files and archival images
                    featuring their Highrise.
                </S.MembersLockedCopy>
                <BaseButton>Download</BaseButton>
            </S.MembersAreaDescription>
        </S.MembersLock>
    );
};
