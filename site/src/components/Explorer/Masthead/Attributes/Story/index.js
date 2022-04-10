import * as S from 'components/Explorer/Masthead/Attributes/Story/Story.styled';
import { useNavigate } from 'react-router-dom';

export const Story = ({ isModal, activeHighrise, className }) => {
    const navigate = useNavigate();

    return (
        <S.Story className={className}>
            <S.StoryCopy isExpanded={isModal}>
                {activeHighrise.description}
            </S.StoryCopy>
            {!isModal && (
                <S.StoryExpand
                    onClick={() => {
                        navigate(`/building/${activeHighrise.index}`, {
                            state: {
                                isLocalNavigation: true,
                            },
                        });
                    }}
                >
                    Read more
                </S.StoryExpand>
            )}
        </S.Story>
    );
};
