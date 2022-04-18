import * as S from 'components/CloseButton/CloseButton.styled';

export const CloseButton = ({ ...props }) => {
    return (
        <S.CloseButton {...props}>
            <S.Close />
        </S.CloseButton>
    );
};
