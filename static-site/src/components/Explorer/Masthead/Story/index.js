import * as S from 'components/Explorer/Masthead/Story/Story.styled';

export const Story = ({ description, className }) => {
    const paragraphs = description.split('\n');

    return (
        <S.Story className={className}>
            {paragraphs.map((paragraph, index) => (
                <S.StoryCopy key={index}>{paragraph}</S.StoryCopy>
            ))}
        </S.Story>
    );
};
