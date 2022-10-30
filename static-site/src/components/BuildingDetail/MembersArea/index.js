import * as S from 'components/BuildingDetail/MembersArea/MembersArea.styled';
import { googleDriveMap } from 'components/BuildingDetail/MembersArea/googleDriveMap';
import { useTokenOwner } from 'components/ExplorerV2/Masthead/Attributes/Traits/hooks/useTokenOwner';
import { ExternalButtonLink } from 'components/ui/BaseButton/ExternalButtonLink';

export const MembersArea = ({ activeHighrise }) => {
    const { isCurrentOwner } = useTokenOwner({ tokenId: activeHighrise.index });

    return (
        <S.MembersLock>
            <S.MembersAreaDescription>
                {isCurrentOwner ? (
                    <S.MembersUnlockedIcon />
                ) : (
                    <S.MembersLockedIcon />
                )}
                <S.MembersLockedHeader>Collectors</S.MembersLockedHeader>
                <S.MembersLockedCopy>
                    Highrise NFT collectors can connect their wallet to access
                    all raw, Photoshop, full res files and archival images
                    featuring their Highrise.
                </S.MembersLockedCopy>
                {isCurrentOwner && (
                    <ExternalButtonLink
                        href={googleDriveMap?.[activeHighrise.index]}
                        buttonText="Download"
                    />
                )}
            </S.MembersAreaDescription>
        </S.MembersLock>
    );
};
