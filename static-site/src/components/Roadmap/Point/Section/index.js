import * as S from 'components/Roadmap/Point/Section/Section.styled';

export const Section = ({ header = '', points = [] }) => {
    return (
        <S.Section>
            <S.SectionHeader
                dangerouslySetInnerHTML={{ __html: header }}
            ></S.SectionHeader>
            <S.List>
                {points.map((point) => {
                    return (
                        <S.ListItem
                            key={point}
                            dangerouslySetInnerHTML={{ __html: point }}
                        />
                    );
                })}
            </S.List>
        </S.Section>
    );
};
