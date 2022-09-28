import * as S from 'components/NewHighrises/NewHighrises.styled';
import { Paragraph } from 'components/ui/Paragraph';

export const NewHighrises = () => {
    return (
        <div
            css={`
                background: #fff;
                padding: 48px 64px 32px;
                min-height: 96px;
            `}
        >
            <S.NewHighrisesHeader>Explore all highrises</S.NewHighrisesHeader>
            <Paragraph
                css={`
                    text-indent: 0;
                    max-width: 650px;
                    margin-bottom: 16px !important;
                `}
            >
                Releasing Oct. 5 at noon EST on OpenSea: Five historic landmark
                skyscrapers from Los Angeles! New sets of digital collectibles
                are released every two weeks.
                <br />
                Coming next: Chicago.
            </Paragraph>
        </div>
    );
};
