import theDrakeSrc from 'assets/images/the-drake.png';
import { Hero } from 'components/Intent/Hero';
import * as S from 'components/Intent/Intent.styled';

export const Intent = () => {
    return (
        <>
            <S.Intent>
                <Hero />
                <S.Message.Desktop />
                <S.How.Desktop />
                <S.TheDrake>
                    <S.TheDrakeImage src={theDrakeSrc} />
                </S.TheDrake>
            </S.Intent>
            <S.Message.Mobile />
            <S.How.Mobile />
        </>
    );
};
