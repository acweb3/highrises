import { Attributes } from 'components/Explorer/Masthead/Attributes';
import * as S from 'components/Explorer/Masthead/MobileMasthead/MobileMasthead.styled';
import { Purchase } from 'components/Explorer/Masthead/Purchase';
import { Box } from 'components/ui/Box';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const MobileMasthead = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <Box isColumn>
            <S.MobileMasthead>
                <S.TitleContainer>
                    <S.Title isActive>
                        {activeHighrise?.name ?? 'THE BUILDINGS'}
                    </S.Title>
                </S.TitleContainer>
                {activeHighrise && <Purchase activeHighrise={activeHighrise} />}
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
                {activeHighrise && (
                    <S.ExternalNavigation
                        showMap
                        activeHighrise={activeHighrise}
                    />
                )}
            </S.MobileMasthead>
        </Box>
    );
};
