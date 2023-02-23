import * as S from 'components/ui/HoverDescription/HoverDescription.styled';
import { forwardRef } from 'react';

export const HoverDescription = forwardRef(
    ({ children, isActive, onClick, title, subtitle }, ref) => {
        return (
            <S.HoverDescription ref={ref} isActive={isActive} onClick={onClick}>
                {children}

                <S.HoverDescriptionCaption>
                    <S.HoverDescriptionIndex>{title}</S.HoverDescriptionIndex>
                    {subtitle && (
                        <S.HoverDescriptionName>
                            {subtitle}
                        </S.HoverDescriptionName>
                    )}
                </S.HoverDescriptionCaption>
            </S.HoverDescription>
        );
    }
);
