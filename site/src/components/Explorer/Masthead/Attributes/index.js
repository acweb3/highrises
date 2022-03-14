import * as S from 'components/Explorer/Masthead/Attributes/Attributes.styled';
import { useEffect, useState } from 'react';

export const Attributes = ({ activeHighrise }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const traits = [
        ['Address', activeHighrise.address],
        ['Year Completed', activeHighrise.date],
        ['Height', activeHighrise.height],
        ['Stories', activeHighrise.stories],
        ['Style', activeHighrise.style],
        ['Designer', activeHighrise.architect],
    ].filter(([, value]) => value);

    useEffect(() => {
        setIsExpanded(false);
    }, [activeHighrise]);

    return (
        <S.Attributes>
            <S.Story>
                <S.StoryCopy isExpanded={isExpanded}>
                    {activeHighrise.description}
                </S.StoryCopy>
                <S.StoryExpand
                    onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
                >
                    {isExpanded ? 'Show less' : 'Read more'}
                </S.StoryExpand>
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
