import highrisesSrc from 'assets/images/logos/highrises.png';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/Intent/Hero/Hero.styled';
import { Sky } from 'components/Sky';

export const Hero = () => {
    return (
        <S.Hero>
            <S.HeroLogo>
                <div>
                    <S.HeroLogoImage src={highrisesSrc} />
                </div>
            </S.HeroLogo>
            <Clouds>
                {cloudProps.hero.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds>
            <Sky />
        </S.Hero>
    );
};
