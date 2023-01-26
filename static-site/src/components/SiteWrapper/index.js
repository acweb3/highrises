import { useWindowListener } from 'common/hooks/useWindowListener';
import { Nav } from 'components/Nav';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { useRef, useState } from 'react';

const useTransformScroll = () => {
    const [isTransform, setIsTransform] = useState(false);
    const scrollRef = useRef(document.documentElement.scrollHeight);

    useWindowListener(
        'scroll',
        (e) => {
            setIsTransform(
                document.documentElement.scrollTop < scrollRef.current
            );

            scrollRef.current = document.documentElement.scrollTop;
        },
        []
    );

    return isTransform;
};

export const SiteWrapper = ({ children }) => {
    const isTransform = useTransformScroll();
    const navRef = useRef();

    return (
        <>
            <S.GlobalStyle />

            <div
                css={`
                    position: fixed;
                    top: 0;
                `}
            >
                <Nav ref={navRef} />
            </div>

            <div
                css={`
                    height: calc(100vh + 100px);
                `}
            />

            <S.SiteWrapperScroll
                transform={isTransform ? navRef.current.offsetHeight : 0}
            >
                <S.SiteWrapper>{children}</S.SiteWrapper>
            </S.SiteWrapperScroll>
        </>
    );
};
