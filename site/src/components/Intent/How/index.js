import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/Intent/How/How.styled';
import { Sky } from 'components/Sky';

export const How = () => {
    return (
        <S.How>
            <S.HowContainer>
                <Clouds>
                    {cloudProps.how.map((styles, i) => (
                        <Cloud styles={styles} key={i} />
                    ))}
                </Clouds>
                <S.HowContent>
                    <S.Title>How?</S.Title>

                    <S.Copy>
                        <S.Paragraph>
                            To document each building, several images are taken
                            by drone from varying elevations. The Images are
                            manually stitched together in Photoshop to create a
                            high resolution elevation scan with flattened
                            perspective. Lighting is enhanced to accentuate the
                            depth and form of each building.
                        </S.Paragraph>
                    </S.Copy>
                </S.HowContent>
            </S.HowContainer>
            <Sky />
        </S.How>
    );
};
