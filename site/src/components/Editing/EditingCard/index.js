import editingTutorialAnimationSrc from 'assets/images/editing-tutorial.gif';
import editingTutorialBackgroundImageSrc from 'assets/images/editing-tutorial.jpg';
import * as S from 'components/Editing/EditingCard/EditingCard.styled';

export const EditingCard = ({ className }) => {
    return (
        <S.EditingCard threshold={0.3} className={className}>
            <S.EditingVideo src={editingTutorialAnimationSrc} />
            <S.EditingBackgroundImage src={editingTutorialBackgroundImageSrc} />
        </S.EditingCard>
    );
};
