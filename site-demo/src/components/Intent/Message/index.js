import * as S from 'components/Intent/Message/Message.styled';
import { Paragraph } from 'components/ui/Paragraph';
import { ViewScroll } from 'components/ui/ViewScroll';

export const Message = () => {
    return (
        <S.Message>
            <ViewScroll>
                <S.Title>Project Intent</S.Title>
                <S.Copy>
                    <Paragraph>
                        Highrises are among the most{' '}
                        <b>iconic and defining elements of American cities</b>,
                        and the technological advancement of the twentieth
                        century fostered new heights. This typology of buildings
                        was not without precedent. Revivals of Classical,
                        Renaissance, and Gothic details are evident in highrises
                        all over American cities.
                    </Paragraph>
                    <Paragraph>
                        <b>
                            Project Highrises uncovers hidden details of some
                            remarkable buildings that tell a greater story about
                            American culture.
                        </b>{' '}
                        These buildings display their ornamentation, decoration,
                        and style to reflect the city's values and ideals. A few
                        decades later, some of these buildings have either been
                        restored to their full glory or left neglected. We are{' '}
                        <b>
                            celebrating the history of these buildings by
                            showcasing their individual character through
                            photography and short stories.
                        </b>
                    </Paragraph>
                </S.Copy>
            </ViewScroll>
        </S.Message>
    );
};
