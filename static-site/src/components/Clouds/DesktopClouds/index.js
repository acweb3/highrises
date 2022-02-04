import { DesktopCloud } from 'components/Clouds/DesktopClouds/DesktopCloud';
import * as S from 'components/Clouds/DesktopClouds/DesktopClouds.styled';

export const cloudProps = {
    hero: [
        {
            top: 100,
            right: -300,
            scale: 0.4,
        },
        {
            top: -200,
            right: 200,
            scale: 0.8,
        },
    ],
    how: [
        {
            top: -200,
            right: 500,
            scale: 1,
        },
        {
            top: 100,
            right: -200,
            scale: 0.4,
        },
        {
            top: 350,
            right: 1000,
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
        {
            top: 650,
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

export const DesktopClouds = ({ cloudKey }) => {
    return (
        <S.DesktopClouds>
            {cloudProps[cloudKey].map((styles, i) => (
                <DesktopCloud styles={styles} key={i} />
            ))}
        </S.DesktopClouds>
    );
};
