import * as S from 'components/Explorer/Masthead/Attributes/Story/Story.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Story = ({ activeHighrise, className }) => {
    const { isExpandedView, setIsExpandedView } =
        useActiveHighriseContext(false);

    return (
        <S.Story className={className}>
            <S.StoryCopy isExpanded={isExpandedView}>
                {activeHighrise.description}
            </S.StoryCopy>
            {!isExpandedView && (
                <S.StoryExpand onClick={() => setIsExpandedView(true)}>
                    Read more
                </S.StoryExpand>
            )}
        </S.Story>
    );
};
