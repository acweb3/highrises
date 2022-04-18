import * as S from 'components/Roadmap/Point/Section/Section.styled';

export const Section = ({ header = '', points = [] }) => {
    return (
        <S.Section>
            <S.SectionHeader>{header}</S.SectionHeader>
            <S.List>
                {points.map((point) => {
                    return <S.ListItem key={point}>{point}</S.ListItem>;
                })}
            </S.List>
        </S.Section>
    );
};
