import * as S from 'components/Explorer/Masthead/About/About.styled';
import { EmailCollection } from 'components/Explorer/Masthead/EmailCollection';
import { Story } from 'components/Explorer/Masthead/Story';
import { Team } from 'components/Explorer/Masthead/Team';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useRef, useState } from 'react';

const rawCities = [
    'Albany',
    'Allentown',
    'Asheville',
    'Atlanta',
    'Austin',
    'Baltimore',
    'Baton Rouge',
    'Beaumont, TX',
    'Beverly Hills',
    'Birmingham',
    'Boston',
    'Buffalo',
    'Camden',
    'Chicago',
    'Cincinnati',
    'Cleveland',
    'Columbus',
    'Dallas',
    'Denver',
    'Detroit',
    'El Paso',
    'Fort Wayne',
    'Fort Worth',
    'Harrisburg',
    'Hartford',
    'Houston',
    'Jackson, MI',
    'Jackson, MS',
    'Kansas City',
    'Lansing',
    'Lincoln',
    'Los Angeles',
    'Memphis',
    'Miami',
    'Milwaukee',
    'Minneapolis',
    'New Orleans',
    'Newark',
    'Niagara Falls',
    'Oakland',
    'Oklahoma City',
    'Philadelphia',
    'Phoenix',
    'Pittsburgh',
    'Pontiac',
    'Portland',
    'Providence',
    'Reading',
    'Richmond',
    'Rochester, MN',
    'Rochester, NY',
    'Sacramento',
    'San Antonio',
    'San Francisco',
    'Santa Monica',
    'Scranton',
    'Seattle',
    'Springfield, MA',
    'St. Louis',
    'St. Paul',
    'Syracuse',
    'Toledo',
    'Tulsa',
    'Waco',
    'Winston-Salem',
];

const div = Math.ceil(rawCities.length / 2);
const first = rawCities.slice(0, div);
const second = rawCities.slice(div);

const CITIES = first.flatMap((city, i) => [city, second[i]]).filter(Boolean);

export const About = () => {
    const { initHighrisesState } = useActiveHighriseContext();
    const [isShowAll, setIsShowAll] = useState(false);
    const initHighrisesCities = useRef(
        initHighrisesState.reduce((acc, highrise) => {
            return { ...acc, [highrise.city]: true };
        }, {})
    );
    const cities = isShowAll ? CITIES : CITIES.slice(0, 6);

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
                    href="https://www.hythacg.com/highrises-editing-tutorials"
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
                    <S.AboutHeader>The Plan</S.AboutHeader>

                    <Story
                        description={`The project is ongoing, and will eventually include 200 Highrises from the cities listed below.`}
                    />

                    <S.AboutPlanCities>
                        {cities.map((city) => (
                            <S.AboutPlanCity key={city}>
                                <S.AboutPlanCityCheck
                                    isActive={initHighrisesCities.current[city]}
                                >
                                    ✓
                                </S.AboutPlanCityCheck>
                                <span>{city}</span>
                            </S.AboutPlanCity>
                        ))}
                    </S.AboutPlanCities>

                    {!isShowAll && (
                        <S.AboutPlanCityButton
                            onClick={() => setIsShowAll(true)}
                        >
                            Show All
                        </S.AboutPlanCityButton>
                    )}
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
