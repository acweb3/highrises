import { MobileCloud } from 'components/Clouds/MobileClouds/MobileCloud';
import * as S from 'components/Clouds/MobileClouds/MobileClouds.styled';
import { useEffect, useState } from 'react';

export const cloudProps = {
    hero: [
        {
            top: -500,
            right: -1000,
            scale: 0.15,
        },
        {
            top: -100,
            right: -900,
            scale: 0.2,
        },
        {
            top: 0,
            right: -1000,
            scale: 0.15,
        },
    ],
    how: [
        {
            top: -200,
            right: -800,
            scale: 0.15,
        },
        {
            top: -500,
            right: -1000,
            scale: 0.2,
        },
    ],
    faq: [
        {
            top: 0,
            right: -800,
            scale: 0.15,
        },
        {
            top: -250,
            right: -1000,
            scale: 0.2,
        },
    ],
    roadmap: [
        {
            top: -100,
            right: -1000,
            scale: 0.25,
        },
        {
            top: 700,
            right: -1100,
            scale: 0.15,
        },
    ],
};

export const MobileClouds = ({ cloudKey }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 200);
    }, []);

    return (
        <S.MobileClouds isLoaded={isLoaded}>
            {cloudProps[cloudKey].map((styles, i) => (
                <MobileCloud styles={styles} key={i} />
            ))}
        </S.MobileClouds>
    );
};
