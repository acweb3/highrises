import birdsSrc from 'assets/images/birds.png';
import highrisesSrc from 'assets/images/logos/highrises.png';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/Intent/Hero/Hero.styled';
import { useEffect, useRef, useState } from 'react';

export const Hero = () => {
    const heroRef = useRef();
    const [resizeHeight, setResizeHeight] = useState(0);

    useEffect(() => {
        setResizeHeight(window.visualViewport.height);
    }, []);

    return (
        <S.Hero ref={heroRef} resizeHeight={resizeHeight}>
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
                    const boundingClientRect =
                        heroRef.current.getBoundingClientRect();
                    const offset =
                        boundingClientRect.y + boundingClientRect.height - 40;

                    window.scrollTo({
                        top: offset - 40,
                        behavior: 'smooth',
                    });
                }}
            >
                <S.ArrowDown />
            </S.HeroDownNavigate>
        </S.Hero>
    );
};
