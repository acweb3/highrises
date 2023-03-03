import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { useMobileMenuContext } from 'contexts/MobileMenu';
import { forwardRef } from 'react';

export const Header = forwardRef((_, ref) => {
    const { activeSort } = useActiveSortContext();
    const { setIsMobileMenuActive } = useMobileMenuContext();

    const text = activeSort?.sortValue ?? 'Highrises';

    return (
        <S.Header ref={ref}>
            <S.HeaderSizeWrapper>
                <S.HeaderDouble isLarge={text.length >= 10}>
                    <S.HeaderFilled>{text}</S.HeaderFilled>
                    <S.HeaderBasic>{text}</S.HeaderBasic>
                </S.HeaderDouble>

                <div
                    css={`
                        padding: 8px;
                        stroke: rgba(34, 34, 34, 0.5);

                        position: absolute;
                        right: 8px;
                    `}
                    onClick={() => setIsMobileMenuActive(true)}
                >
                    <S.HeaderHamburger />
                </div>
            </S.HeaderSizeWrapper>

            <S.HeaderSubtitle>
                {activeSort?.sortName ?? 'Collection'}
            </S.HeaderSubtitle>
        </S.Header>
    );
});
