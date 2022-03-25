import { useDocumentListener } from '../../common/hooks/useDocumentListener';
import cloudSrc from 'assets/images/cloud.png';
import * as S from 'components/Cloud/Cloud.styled';
import { useEffect, useRef, useState } from 'react';
import { useThrottle } from 'react-use';

export { Clouds } from 'components/Cloud/Cloud.styled';

export const cloudProps = {
    hero: {
        desktop: [
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
        mobile: [
            {
                top: -100,
                right: -900,
                scale: 0.3,
            },
            {
                top: -500,
                right: -1200,
                scale: 0.25,
            },
        ],
    },
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

export const Cloud = ({ styles }) => {
    const cloudRef = useRef();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scroll, setScroll] = useState(0);
    const throttledScroll = useThrottle(scroll, 200);

    useEffect(() => {
        let sto;
        if (hasScrolled) {
            sto = setTimeout(() => {
                setIsLoaded(true);
            }, 300);
        }

        return () => {
            clearTimeout(sto);
        };
    }, [hasScrolled]);

    useDocumentListener(
        'scroll',
        () => {
            const offset =
                cloudRef.current?.getBoundingClientRect().top ??
                0 + window.scrollY;
            setHasScrolled(true);
            setScroll(offset - window.scrollY * 0.1);
        },
        []
    );

    return (
        <S.Cloud
            isLoaded={isLoaded}
            ref={cloudRef}
            offset={throttledScroll}
            {...styles}
        >
            <S.CloudImage src={cloudSrc} />
        </S.Cloud>
    );
};
