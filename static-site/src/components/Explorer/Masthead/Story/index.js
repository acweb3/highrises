import { getBuildingURL } from 'common/helpers';
import * as S from 'components/Explorer/Masthead/Story/Story.styled';
import { navigate } from 'gatsby';

export const Story = ({ activeHighrise, className }) => {
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
            <S.StoryCopy>{paragraphs[0]}</S.StoryCopy>

            <S.StoryTransparencyWrapper>
                {paragraphs.slice(1).map((paragraph, index) => (
                    <S.StoryCopy key={index}>{paragraph}</S.StoryCopy>
                ))}
            </S.StoryTransparencyWrapper>
        </S.Story>
    );
};
