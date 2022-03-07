import inquirerSrc from 'assets/images/inquirer.png';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import { Point } from 'components/Roadmap/Point';
import * as S from 'components/Roadmap/Roadmap.styled';

const POINTS = [
    {
        header: 'NORTHEAST',
        sections: [
            {
                header: '25 highrises',
                points: [
                    'Philadelphia, PA',
                    'Camden, NJ',
                    'Baltimore, MD',
                    'Richmond, VA',
                    'Pittsburgh. PA',
                    'Buffalo, NY',
                ],
            },
            {
                header: 'NFT Release',
                points: [
                    '1 Giveaway (Hythacg Twitter)',
                    '5 reserved for Rowhomes holders',
                    '4 reserved for Hythacg 1/1 holders',
                    '5 Auctions',
                    '10 publicly available',
                ],
            },
        ],
    },
    {
        header: 'WEST COAST',
        sections: [
            {
                header: '25 highrises',
                points: [
                    'Los Angeles, CA',
                    'San Francisco. CA',
                    'Oakland, CA',
                    'Seattle. CA',
                ],
            },
            {
                header: 'NFT Release',
                points: ['TBA'],
            },
        ],
    },
    {
        header: 'MIDWEST',
        sections: [
            {
                header: '25 highrises',
                points: ['Chicago', 'Detroit', 'TBA'],
            },
            {
                header: 'NFT Release',
                points: ['TBA'],
            },
        ],
    },
    {
        header: 'NYC',
        sections: [
            {
                points: ['TBA'],
            },
        ],
    },
    {
        header: 'The Book',
    },
];

export const Roadmap = () => {
    return (
        <S.Roadmap>
            <Clouds>
                {cloudProps.roadmap.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds>
            <S.RoadmapImageWrapper>
                <S.RoadmapImage src={inquirerSrc} />
            </S.RoadmapImageWrapper>
            <S.RoadmapChart>
                <S.Title>Project Roadmap</S.Title>
                <S.Points>
                    {POINTS.map((point) => {
                        return <Point key={point.header} {...point} />;
                    })}
                </S.Points>
            </S.RoadmapChart>
            <S.Sky />
        </S.Roadmap>
    );
};
