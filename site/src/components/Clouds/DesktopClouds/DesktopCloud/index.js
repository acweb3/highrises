import cloudSrc from 'assets/images/cloud.png';
import { useDocumentListener } from 'common/hooks/useDocumentListener';
import * as S from 'components/Clouds/DesktopClouds/DesktopCloud/DesktopCloud.styled';
import { useEffect, useRef, useState } from 'react';
import { useThrottle } from 'react-use';

export const DesktopCloud = ({ styles }) => {
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
        <S.DesktopCloud
            isLoaded={isLoaded}
            ref={cloudRef}
            offset={throttledScroll}
            {...styles}
        >
            <S.DesktopCloudImage src={cloudSrc} />
        </S.DesktopCloud>
    );
};
