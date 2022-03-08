import andySrc from 'assets/images/profiles/andy.jpg';
import chrisSrc from 'assets/images/profiles/chris.jpg';
import cooperSrc from 'assets/images/profiles/cooper.png';
import nickSrc from 'assets/images/profiles/nick.jpg';
import { Profile } from 'components/Team/Profile';
import * as S from 'components/Team/Team.styled';
import { Header } from 'components/ui/Header';

const PROFILES = [
    {
        header: 'Chris Hytha',
        points: [
            'Project Founder',
            'Drexel University | BA, Architecture',
            'Lead Visual Artist',
        ],
        src: chrisSrc,
    },
    {
        header: 'Nick Merutka',
        points: [
            'Iowa State Univeristy | BFA, Graphic Design',
            'Graphic Poster Development',
        ],
        src: nickSrc,
    },
    {
        header: 'Cooper Sherwin',
        points: ['Community Development', 'Project Management'],
        src: cooperSrc,
    },
    {
        header: 'Andy Gallagher',
        points: ['Web Development'],
        src: andySrc,
    },
];

export const Team = () => {
    return (
        <S.Team>
            <Header>The Team</Header>
            <S.Profiles>
                {PROFILES.map((profile, i) => {
                    return (
                        <Profile key={`${profile.header}${i}`} {...profile} />
                    );
                })}
            </S.Profiles>
            <S.BorderBottom />
        </S.Team>
    );
};
