import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/Explorer/Masthead/Attributes/Story/Story.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Story = ({ isModal, activeHighrise, className }) => {
    const { isMobile } = useWindowSize();
    const { setIsExpandedView } = useActiveHighriseContext(false);

    return (
        <S.Story className={className}>
            <S.StoryCopy isExpanded={isModal}>
                {activeHighrise.description}
            </S.StoryCopy>
            {!isModal && (
                <S.StoryExpand onClick={() => setIsExpandedView(true)}>
                    Read more
                </S.StoryExpand>
            )}
        </S.Story>
    );
};
