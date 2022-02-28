import * as S from 'components/Roadmap/Point/Point.styled';
import { Section } from 'components/Roadmap/Point/Section';
import { ViewScroll } from 'components/ui/ViewScroll';

export const Point = ({ header, sections = [] }) => {
    return (
        <S.Point>
            <ViewScroll>
                <S.PointHeader>{header}</S.PointHeader>
            </ViewScroll>
            {sections.map((section, i) => {
                return <Section key={section.header ?? i} {...section} />;
            })}
        </S.Point>
    );
};
