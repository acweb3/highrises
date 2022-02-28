import { Profile } from 'components/Team/Profile';
import * as S from 'components/Team/Team.styled';
import { Header } from 'components/ui/Header';

const PROFILES = [
    {
        header: 'Chris Hytha',
        points: [
            'Project Founder',
            'Drexel Architecture Grad',
            'Creative Director',
        ],
    },
    {
        header: 'Chris Hytha',
        points: [
            'Project Founder',
            'Drexel Architecture Grad',
            'Creative Director',
        ],
    },
    {
        header: 'Chris Hytha',
        points: [
            'Project Founder',
            'Drexel Architecture Grad',
            'Creative Director',
        ],
    },
    {
        header: 'Chris Hytha',
        points: [
            'Project Founder',
            'Drexel Architecture Grad',
            'Creative Director',
        ],
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
        </S.Team>
    );
};
