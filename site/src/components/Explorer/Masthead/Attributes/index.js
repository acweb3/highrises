import * as S from 'components/Explorer/Masthead/Attributes/Attributes.styled';

export const Attributes = ({ activeHighrise }) => {
    const traits = [
        ['Address', activeHighrise.address],
        ['Year Completed', activeHighrise.date],
        ['Height', activeHighrise.height],
        ['Stories', activeHighrise.stories],
        ['Style', activeHighrise.style],
        ['Designer', activeHighrise.architect],
    ].filter(([, value]) => value);

    return (
        <S.Attributes>
            <S.Story>
                <S.StoryCopy>{activeHighrise.description}</S.StoryCopy>
                <S.StoryPurchase
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.hythacg.com/prints/highrise${`${
                        activeHighrise.index + 1
                    }`.padStart(2, '0')}`}
                >
                    Buy print
                </S.StoryPurchase>
            </S.Story>

            <S.Traits>
                {traits.map(([name, value]) => (
                    <S.Trait key={name}>
                        <S.TraitWord>{name}</S.TraitWord>
                        <S.TraitBottomEllipsis />
                        <S.TraitWord isValue>{value}</S.TraitWord>
                    </S.Trait>
                ))}
            </S.Traits>
        </S.Attributes>
    );
};
