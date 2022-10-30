import * as S from 'components/ExplorerV2/Masthead/Attributes/Attributes.styled';
import { Story } from 'components/ExplorerV2/Masthead/Attributes/Story';
import { Traits } from 'components/ExplorerV2/Masthead/Attributes/Traits';

export const Attributes = ({ activeHighrise }) => {
    return (
        <S.Attributes>
            {activeHighrise && (
                <>
                    <Story activeHighrise={activeHighrise} />
                    <Traits activeHighrise={activeHighrise} />
                </>
            )}
        </S.Attributes>
    );
};
