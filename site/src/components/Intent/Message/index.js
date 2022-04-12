import * as S from 'components/Intent/Message/Message.styled';
import { Box } from 'components/ui/Box';
import { Paragraph } from 'components/ui/Paragraph';
import { ViewScroll } from 'components/ui/ViewScroll';

export const Message = ({ className }) => {
    return (
        <S.Message className={className}>
            <Box>
                <S.MessageContent>
                    <ViewScroll>
                        <S.Title>Project Intent</S.Title>
                        <S.Copy>
                            <Paragraph>
                                Highrises are the{' '}
                                <b>iconic elements of American cities.</b> From
                                their origins in Manhattan and Chicago, these
                                soaring structures signaled radical new heights
                                in technological advancement. By fusing
                                Classical, Renaissance, and Gothic motifs onto
                                immense steel forms, then{' '}
                                <b>defining a new architectural language</b>{' '}
                                with Art Deco and International, America’s
                                skyscrapers set the tone for cities of the world
                                to follow.
                            </Paragraph>
                            <Paragraph>
                                The Highrises project{' '}
                                <b>reveals the hidden details</b> of remarkable
                                buildings all across the country, including many
                                that have been overlooked or underappreciated.
                                Images showcase styles of ornamentation
                                reflecting the values and ideals that animated{' '}
                                <b>urban culture in the early 20th century.</b>{' '}
                                Stories integrated into each image provide
                                context and historical significance and deepen
                                our understanding of their importance and value.
                            </Paragraph>
                        </S.Copy>
                    </ViewScroll>
                </S.MessageContent>
            </Box>
        </S.Message>
    );
};
