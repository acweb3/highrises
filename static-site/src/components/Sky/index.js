import * as S from 'components/Sky/Sky.styled';
import { StaticImage } from 'gatsby-plugin-image';

export const Sky = ({ className }) => {
    return (
        <S.Sky className={className}>
            <StaticImage
                src={'../../assets/images/blue-sky-background.webp'}
                alt=""
            />
        </S.Sky>
    );
};
