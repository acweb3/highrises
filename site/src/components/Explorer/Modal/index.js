import * as S from 'components/Explorer/Modal/Modal.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Modal = () => {
    const { activeHighrise, setIsExpandedView } = useActiveHighriseContext();

    console.log({ activeHighrise });

    return (
        <S.Modal>
            <S.CloseButton
                onClick={() => {
                    setIsExpandedView(false);
                }}
            >
                <S.Close />
            </S.CloseButton>
            <S.ModalHeader>
                <S.Header>{activeHighrise.name}</S.Header>
                <S.SubHeader>{activeHighrise.highriseNumber}</S.SubHeader>
            </S.ModalHeader>
            <S.ModalImageContainer>
                <S.ModalImage src={activeHighrise.posterSrc} />
            </S.ModalImageContainer>
            <S.SubHeader>Traits</S.SubHeader>
            <S.Traits activeHighrise={activeHighrise} />
            <S.Purchase isCentered />
            <S.SubHeader>Story</S.SubHeader>
            <S.Story activeHighrise={activeHighrise} />
        </S.Modal>
    );
};
