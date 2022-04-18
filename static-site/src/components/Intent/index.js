import { Hero } from 'components/Intent/Hero';
import * as S from 'components/Intent/Intent.styled';
import { StaticImage } from 'gatsby-plugin-image';

export const Intent = () => {
    return (
        <>
            <S.Intent>
                <Hero />
                <S.Message.Desktop />
                <S.How.Desktop />
                <S.TheDrake>
                    <S.TheDrakeImage>
                        <StaticImage
                            src={'../../assets/images/the-drake.webp'}
                            alt=""
                            placeholder="blurred"
                        />
                    </S.TheDrakeImage>
                </S.TheDrake>
            </S.Intent>
            <S.Message.Mobile />
            <S.How.Mobile />
        </>
    );
};
