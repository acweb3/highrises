import { useDocumentListener } from '../../common/hooks/useDocumentListener';
import cloudSrc from 'assets/images/cloud.png';
import * as S from 'components/Cloud/Cloud.styled';
import { useEffect, useRef, useState } from 'react';
import { useThrottle } from 'react-use';

export { Clouds } from 'components/Cloud/Cloud.styled';

export const cloudProps = {
    hero: [
        {
            top: 100,
            right: -600,
            scale: 0.4,
        },
        {
            top: -200,
            right: -600,
            scale: 0.8,
        },
        {
            top: 400,
            right: 800,
            scale: 0.45,
        },
    ],
    how: [
        {
            top: 100,
            right: -700,
            scale: 1.2,
        },
    ],
    faq: [
        {
            top: 100,
            right: -1200,
            scale: 1,
        },
        {
            top: 100,
            right: -1400,
            scale: 0.7,
        },
    ],
    roadmap: [
        {
            top: 100,
            right: -2200,
            scale: 1.2,
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
