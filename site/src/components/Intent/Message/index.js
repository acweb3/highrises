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
                        Highrises are among the most
                        <b>iconic and defining elements of American cities</b>,
                        and the technological advancement of the twentieth
                        century fostered new heights. This typology of buildings
                        was not without precedent. Revivals of Classical,
                        Renaissance, and Gothic details are evident in highrises
                        across American cities.
                    </Paragraph>
                    <Paragraph>
                        <b>
                            The Highrises project uncovers hidden details of
                            remarkable buildings that tell a greater story about
                            American culture
                        </b>
                        .These buildings display their ornamentation,
                        decoration, and style to reflect the city's values and
                        ideals. We are{' '}
                        <b>
                            celebrating the history of these structures by
                            showcasing their individual character through
                            photography and short stories
                        </b>
                        .
                    </Paragraph>
                </S.Copy>
            </ViewScroll>
        </S.Message>
    );
};
