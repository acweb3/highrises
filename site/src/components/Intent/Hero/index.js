import birdsSrc from 'assets/images/birds.png';
import highrisesSrc from 'assets/images/logos/highrises.png';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/Intent/Hero/Hero.styled';

export const Hero = () => {
    return (
        <S.Hero>
            <S.Birds src={birdsSrc} />
            <S.HeroLogo>
                <div>
                    <S.HeroLogoImage src={highrisesSrc} />
                </div>
            </S.HeroLogo>
            <Clouds.Desktop>
                {cloudProps.hero.desktop.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds.Desktop>
            <Clouds.Mobile>
                {cloudProps.hero.mobile.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds.Mobile>
            <S.Sky />

            <S.HeroDownNavigate
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth',
                    });
                }}
            >
                <S.ArrowDown />
            </S.HeroDownNavigate>
        </S.Hero>
    );
};
