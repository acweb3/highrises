import * as S from 'components/Roadmap/Point/Point.styled';
import { Section } from 'components/Roadmap/Point/Section';
import { ViewScroll } from 'components/ui/ViewScroll';
import { useState } from 'react';

export const Point = ({ header, sections = [], isCompleted }) => {
    const [isCollapsed, setIsCollapsed] = useState(isCompleted);

    return (
        <S.Point
            isCompleted={isCompleted}
            onClick={() => {
                if (isCompleted) {
                    setIsCollapsed((isCollapsed) => !isCollapsed);
                }
            }}
        >
            <ViewScroll>
                <S.PointHeader isCompleted={isCompleted}>
                    {header}
                </S.PointHeader>
            </ViewScroll>
            {!isCollapsed &&
                sections.map((section, i) => {
                    return <Section key={section.header ?? i} {...section} />;
                })}
        </S.Point>
    );
};
