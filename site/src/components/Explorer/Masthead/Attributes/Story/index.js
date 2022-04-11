import * as S from 'components/Explorer/Masthead/Attributes/Story/Story.styled';
import { useNavigate } from 'react-router-dom';

export const Story = ({ isModal, activeHighrise, className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/building/${activeHighrise.index}`, {
            state: {
                isLocalNavigation: true,
            },
        });
    };

    return (
        <S.Story className={className}>
            <S.StoryCopy isExpanded={isModal} onClick={handleClick}>
                {activeHighrise.description}
            </S.StoryCopy>
            {!isModal && (
                <S.StoryExpand onClick={handleClick}>Read more</S.StoryExpand>
            )}
        </S.Story>
    );
};
