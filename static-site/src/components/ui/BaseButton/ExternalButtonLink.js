import * as S from 'components/ui/BaseButton/BaseButton.styled';

export const ExternalButtonLink = ({ className, buttonText, href }) => {
    return (
        <S.ExternalButtonLink
            className={className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <S.ExternalButton>{buttonText}</S.ExternalButton>
        </S.ExternalButtonLink>
    );
};
