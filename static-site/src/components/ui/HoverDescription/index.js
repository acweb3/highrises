import * as S from 'components/ui/HoverDescription/HoverDescription.styled';
import { forwardRef } from 'react';

export const HoverDescription = forwardRef(
    ({ children, isActive, onClick, title, subtitle, className }, ref) => {
        return (
            <S.HoverDescription
                className={className}
                ref={ref}
                isActive={isActive}
                onClick={onClick}
            >
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
