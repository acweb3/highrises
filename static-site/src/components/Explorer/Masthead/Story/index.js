import { getBuildingURL } from 'common/helpers';
import * as S from 'components/Explorer/Masthead/Story/Story.styled';
import { navigate } from 'gatsby';

export const Story = ({ isModal, activeHighrise, className }) => {
    const handleClick = () => {
        navigate(getBuildingURL(activeHighrise), {
            state: {
                fromStory: true,
            },
        });
    };

    const paragraphs = activeHighrise.description.split('\n');

    return (
        <S.Story className={className}>
            <S.StoryCopy isExpanded={isModal}>{paragraphs[0]}</S.StoryCopy>

            <S.StoryTransparencyWrapper
                isExpanded={isModal}
                onClick={isModal ? undefined : handleClick}
            >
                {paragraphs.slice(1).map((paragraph, index) => (
                    <S.StoryCopy key={index} isExpanded={isModal}>
                        {paragraph}
                    </S.StoryCopy>
                ))}
            </S.StoryTransparencyWrapper>

            {!isModal && (
                <S.StoryExpand onClick={handleClick}>Read more</S.StoryExpand>
            )}
        </S.Story>
    );
};
