import * as S from 'components/ExplorerV2/Masthead/Attributes/Traits/Traits.styled';
import { useTokenOwner } from 'components/ExplorerV2/Masthead/Attributes/Traits/hooks/useTokenOwner';

export const Traits = ({ activeHighrise, className }) => {
    const { tokenOwnerAddress } = useTokenOwner({
        tokenId: activeHighrise.index,
    });

    const traits = [
        ['Address', activeHighrise.address],
        ['Opened', activeHighrise.opened],
        ['Height', `${activeHighrise.height}'`],
        ['Stories', activeHighrise.stories],
        ['Style', activeHighrise.style],
        ['Secondary Style', activeHighrise.secondaryStyle],
        ['Architect', activeHighrise.architect],
        ['Token Owner', tokenOwnerAddress ?? '0x...'],
    ].filter(([, value]) => value);

    return (
        <S.Traits className={className}>
            {traits.map(([name, value]) => (
                <S.Trait key={name}>
                    <S.TraitWord>{name}</S.TraitWord>
                    <S.TraitBottomEllipsis />
                    <S.TraitWord isValue>{value}</S.TraitWord>
                </S.Trait>
            ))}
        </S.Traits>
    );
};
