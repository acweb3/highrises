import * as S from 'components/Explorer/Masthead/Attributes/Traits/Traits.styled';

export const Traits = ({ activeHighrise, className }) => {
    const traits = [
        ['Address', activeHighrise.address],
        ['Year Completed', activeHighrise.date],
        ['Height', activeHighrise.height],
        ['Stories', activeHighrise.stories],
        ['Style', activeHighrise.style],
        ['Designer', activeHighrise.architect],
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
