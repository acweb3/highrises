import birdsSrc from 'assets/images/birds.png';
import highrisesSrc from 'assets/images/logos/highrises.png';
import { Clouds } from 'components/Clouds';
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

            <Clouds cloudKey="hero" />

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
