import * as S from 'components/Explorer/Masthead/About/About.styled';
import { EmailCollection } from 'components/Explorer/Masthead/EmailCollection';
import { Story } from 'components/Explorer/Masthead/Story';
import { Team } from 'components/Explorer/Masthead/Team';

const PUBLICATIONS = [
    {
        title: 'Chicago Sun-Times',
        url: 'https://chicago.suntimes.com/columnists/2022/11/13/23451597/chicago-old-skyscrapers-drone-photography-chris-hytha-architecture-steinberg',
    },
    {
        title: 'Philadelphia Inquirer',
        url: 'https://www.inquirer.com/news/philadelphia-skyscrapers-highrises-photo-gallery-chris-hytha-20230717.html',
    },
    {
        title: 'MyModernMet',
        url: 'https://mymodernmet.com/chris-hytha-drone-architecture-photos/',
    },
    {
        title: 'Texas Architect',
        url: 'https://magazine.texasarchitects.org/2024/05/02/in-the-realm-of-gods-and-mountains/',
    },
    {
        title: 'Hour Detroit',
        url: 'https://www.hourdetroit.com/books-literature/six-michigan-art-deco-high-rises-featured-in-new-book/',
    },
    {
        title: 'Providence Monthly',
        url: 'https://providenceonline.com/stories/providences-superman-building-shines-in-coffee-table-book,102412?',
    },
    {
        title: 'Chicago Magazine',
        url: 'https://www.chicagomag.com/chicago-magazine/the-view-from-the-clouds/',
    },
    {
        title: 'Buffalo News',
        url: 'https://buffalonews.com/news/sean-kirst-young-photographer-captures-irreplaceable-art-deco-peaks-of-buffalo-and-beyond/article_3d7be886-e107-11ed-8767-b702fa03bfe9.html#tracking-source=home-top-story',
    },
    {
        title: 'Time Out',
        url: 'https://www.timeout.com/usa/news/get-a-birds-eye-view-of-americas-most-famous-skyscrapers-011923',
    },
    {
        title: 'DeMilked',
        url: 'https://www.demilked.com/american-skyscrapers-chris-hytha/',
    },
    {
        title: 'Moss and Fog',
        url: 'https://mossandfog.com/highrises-series-celebrates-classic-skyscrapers-from-a-beautifully-unique-vantage-point/',
    },
    {
        title: 'FOX 23 Chicago',
        url: 'https://www.google.com/amp/s/www.fox32chicago.com/news/new-photo-book-will-show-off-chicagos-skyscrapers.amp',
    },
    {
        title: 'PetaPixel',
        url: 'https://petapixel.com/2022/12/07/photographers-stunning-images-of-us-buildings-are-captured-on-a-drone/',
    },
    {
        title: 'Allships',
        url: 'https://allships.co/article/highrises-chris-hytha',
    },
    {
        title: 'The Newarker',
        url: 'https://newarkermag.com/2023/01/01/interview-with-chris-hytha/',
    },
];

export const About = () => {
    return (
        <>
            <S.AboutHeader isFirst>About the Project</S.AboutHeader>

            <S.AboutSection>
                <Story
                    description={`The prosperity of early 20th century America resulted in a boom of skyscrapers that still tower over cities across the country today. Focusing on the character and craftsmanship on display at the top of these landmark buildings in a way that can’t be seen from street level, the Highrises Collection reveals fascinating details and stories of these distinctly American icons.`}
                />
            </S.AboutSection>

            <S.AboutHeader>The Art</S.AboutHeader>

            <S.AboutSection>
                <Story
                    description={`A drone-mounted camera takes multiple high-res photos of the top of each Highrise. Images are stitched together manually to create a elevation scan with flattened perspective and enhanced lighting effects to accentuate depth and form. Creative and artistic liberties celebrate the unique character of each structure.`}
                />

                <a
                    href="https://www.hythacg.com/highrises-editing-tutorial-sales-page"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.AboutButton>Editing Tutorial</S.AboutButton>
                </a>
            </S.AboutSection>

            <S.AboutHeader>The History</S.AboutHeader>

            <S.AboutSection>
                <Story
                    description={`Accompanying each Highrise is a short narrative of how it came to be, who were the major personalities involved, and what it meant to the city where it was built. Highrises also are identified and sortable by city or region, year of opening, architectural style, and special attributes.`}
                />
            </S.AboutSection>

            <S.AboutGridWrapper>
                <S.AboutPlan>
                    <S.AboutHeader>Media and Press</S.AboutHeader>

                    <S.AboutPlanCities>
                        {PUBLICATIONS.map(({ title, url }) => (
                            <S.AboutPlanCity key={title}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {title}
                                </a>
                            </S.AboutPlanCity>
                        ))}
                    </S.AboutPlanCities>
                </S.AboutPlan>
            </S.AboutGridWrapper>

            <S.AboutHeader>The Team</S.AboutHeader>

            <Team />

            <S.AboutGridWrapper>
                <EmailCollection />
            </S.AboutGridWrapper>
        </>
    );
};
