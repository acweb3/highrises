import * as S from 'components/Explorer/Masthead/Attributes/Attributes.styled';
import { Story } from 'components/Explorer/Masthead/Attributes/Story';
import { Traits } from 'components/Explorer/Masthead/Attributes/Traits';

export const Attributes = ({ activeHighrise }) => {
    return (
        <S.Attributes>
            <Story activeHighrise={activeHighrise} />
            <Traits activeHighrise={activeHighrise} />
        </S.Attributes>
    );
};
