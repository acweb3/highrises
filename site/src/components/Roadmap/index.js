import clockFaceSrc from 'assets/images/clockFace.mp4';
import inquirerSrc from 'assets/images/inquirer.png';
import { Clouds } from 'components/Clouds';
import { Point } from 'components/Roadmap/Point';
import * as S from 'components/Roadmap/Roadmap.styled';
import { Box } from 'components/ui/Box';

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
        <>
            {/* <S.MobileVideoWrapper>
                <S.RoadmapVideo
                    onError={(e) => console.log(e)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={clockFaceSrc}
                />
            </S.MobileVideoWrapper> */}
            <S.Roadmap>
                <Clouds cloudKey="roadmap" />
                <S.RoadmapImageWrapper>
                    <S.RoadmapVideo
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={clockFaceSrc}
                    />
                    <S.RoadmapImage src={inquirerSrc} />
                </S.RoadmapImageWrapper>
                <div
                    style={{
                        width: '100vw',
                    }}
                >
                    <Box>
                        <S.RoadmapChart>
                            <S.Title>Project Roadmap</S.Title>
                            <S.Points>
                                {POINTS.map((point) => {
                                    return (
                                        <Point key={point.header} {...point} />
                                    );
                                })}
                            </S.Points>
                        </S.RoadmapChart>
                        <S.Sky />
                    </Box>
                </div>
            </S.Roadmap>
        </>
    );
};
