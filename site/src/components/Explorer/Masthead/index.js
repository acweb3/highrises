import { Attributes } from 'components/Explorer/Masthead/Attributes';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { Purchase } from 'components/Explorer/Masthead/Purchase';
import { Box } from 'components/ui/Box';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const { mastheadRef } = useExplorerRefContext();

    return (
        <Box ref={mastheadRef} isColumn>
            <S.Masthead>
                <S.TitleContainer>
                    <S.Title isActive>
                        {activeHighrise?.name ?? 'THE BUILDINGS'}
                    </S.Title>
                </S.TitleContainer>
                <S.Description>
                    {activeHighrise ? (
                        <Attributes activeHighrise={activeHighrise} />
                    ) : (
                        <S.PlaceholderDescription>
                            Highrises are among the most iconic and defining
                            elements of American Cities, and the technological
                            advancement of the twentieth century fostered new
                            heights.
                        </S.PlaceholderDescription>
                    )}
                </S.Description>

                {activeHighrise && <Purchase activeHighrise={activeHighrise} />}
            </S.Masthead>
        </Box>
    );
};
