import { Clouds } from 'components/Clouds';
import { Drone } from 'components/Intent/How/Drone';
import * as S from 'components/Intent/How/How.styled';
import { Box } from 'components/ui/Box';

export const How = ({ className }) => {
    return (
        <S.How className={className}>
            <Box>
                <S.HowContainer>
                    <Drone />
                    <Clouds cloudKey="how" />

                    <S.HowContent>
                        <S.Title>How?</S.Title>

                        <S.Copy>
                            <S.Paragraph>
                                A drone-mounted camera photographs the top of
                                each Highrise from varying positions. Images are
                                stitched together manually in Photoshop to
                                create a high-res elevation scan with flattened
                                perspective and enhanced lighting effects to
                                accentuate depth and form. Creative and artistic
                                liberties celebrate the unique character of each
                                structure.
                            </S.Paragraph>
                        </S.Copy>
                    </S.HowContent>
                </S.HowContainer>
            </Box>
            <S.Sky />
        </S.How>
    );
};
