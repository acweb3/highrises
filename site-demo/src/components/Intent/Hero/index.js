import highrisesSrc from 'assets/images/logos/highrises.jpg';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/Intent/Hero/Hero.styled';

export const Hero = () => {
    return (
        <S.Hero>
            <S.HeroLogo src={highrisesSrc} />
            <Clouds>
                {cloudProps.hero.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds>
        </S.Hero>
    );
};
