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
                        <S.Title>The Project</S.Title>
                        <S.Copy>
                            <Paragraph>
                                Highrises are the{' '}
                                <b>iconic elements of American cities</b>.
                                Reaching radical new heights in technological
                                advancement, skyscrapers fused Classical,
                                Renaissance, and Gothic motifs onto steel and
                                defined a <b>new architectural language</b> with
                                Art Deco and International.
                            </Paragraph>
                            <Paragraph>
                                The Highrises project{' '}
                                <b>reveals hidden details</b> of remarkable
                                buildings, including many that are
                                underappreciated. <b>The images</b> showcase
                                structures that reflect the values and ideals
                                animating the early 20th century.{' '}
                                <b>The stories</b> provide historical context
                                and deepen our understanding of their importance
                                and value.
                            </Paragraph>
                        </S.Copy>
                    </ViewScroll>
                </S.MessageContent>
            </Box>
        </S.Message>
    );
};
