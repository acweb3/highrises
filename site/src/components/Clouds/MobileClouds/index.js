import { MobileCloud } from 'components/Clouds/MobileClouds/MobileCloud';
import * as S from 'components/Clouds/MobileClouds/MobileClouds.styled';

export const cloudProps = {
    hero: [
        {
            top: -500,
            right: -800,
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
            right: -500,
            scale: 0.5,
        },
        {
            top: -500,
            right: -1400,
            scale: 0.4,
        },
        {
            top: 350,
            right: -1500,
            scale: 0.6,
        },
    ],
    faq: [
        {
            top: 0,
            right: -800,
            scale: 0.5,
        },
        {
            top: -250,
            right: 0,
            scale: 0.4,
        },
    ],
    roadmap: [
        {
            top: -100,
            right: -1200,
            scale: 0.6,
        },
        {
            top: 700,
            right: -1200,
            scale: 0.4,
        },
    ],
};

export const MobileClouds = ({ cloudKey }) => {
    return (
        <S.MobileClouds>
            {cloudProps[cloudKey].map((styles, i) => (
                <MobileCloud styles={styles} key={i} />
            ))}
        </S.MobileClouds>
    );
};
