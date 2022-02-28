import editingTutorialSrc from 'assets/images/editing-tutorial.jpg';
import * as S from 'components/Editing/Editing.styled';
import { Header } from 'components/ui/Header';
import { Paragraph } from 'components/ui/Paragraph';

export const Editing = () => {
    return (
        <S.Editing>
            <S.EditingVideo src={editingTutorialSrc} />
            <S.EditingDescription>
                <Header>Editing</Header>
                <S.Copy>
                    <Paragraph>
                        Chris Hytha has been working in Photoshop for nearly 10
                        years. His experience ranges from creating complex
                        layered architectural drawing to creating atmospheric
                        fine art photography edits.
                    </Paragraph>
                    <Paragraph>
                        This two part tutorial series walks through the entire
                        shooting and editing process from start to finish for
                        two of the highrises featured in the series.
                    </Paragraph>
                </S.Copy>

                {/** # TODO => Replace this link */}
                <S.LearnMore href="https://www.hythacg.com/aboutme">
                    Learn more
                </S.LearnMore>
            </S.EditingDescription>
        </S.Editing>
    );
};
