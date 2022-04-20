import clockFaceSrc from 'assets/images/clockFace.mp4';
import inquirerSrc from 'assets/images/inquirer.webp';
import { Clouds } from 'components/Clouds';
import { Point } from 'components/Roadmap/Point';
import * as S from 'components/Roadmap/Roadmap.styled';
import { Box } from 'components/ui/Box';

const POINTS = [
    {
        header: 'April: Mid-Atlantic',
        sections: [
            {
                header: '',
                points: [
                    'Philadelphia, Pittsburgh, Baltimore',
                    '20 1/1 NFTs',
                    'Custom smart contract, hosted on Opensea',
                ],
            },

            {
                header: '<a href="https://twitter.com/Hythacg/status/1516084174914039808" rel="noopener noreferrer" target="_blank">1 Retweet Giveaway: The Drake</a>',
                points: ['Winner announced 4/20 Noon EST'],
            },
            {
                header: '3 Public Auctions',
                points: [
                    'Highrises #01, #16, #20',
                    'Auctions begin 4/19 Noon EST and close 4/22 Noon EST',
                ],
            },
            {
                header: '16 Presale at 1 ETH',
                points: [
                    'Presale opens 4/21 11am EST for 1 hour',
                    'Limited to Rowhomes NFT holders and collectors of Hythacg’s 1/1 works on SuperRare and Foundation as of 4/20 6pm EST',
                    'First come first served, limit one per collector',
                ],
            },
            {
                header: 'Public Release',
                points: [
                    '4/21 1pm EST',
                    'Any highrises not sold during presale will be publicly offered at 1 ETH',
                ],
            },
        ],
    },
    {
        header: 'June: Northeast',
        sections: [
            {
                header: 'Boston, Buffalo, Albany and more',
            },
        ],
    },
    {
        header: 'August: West',
        sections: [
            {
                header: 'Los Angeles, San Francisco, Seattle and more',
            },
        ],
    },
    {
        header: 'October: Midwest',
        sections: [
            {
                header: 'Chicago, Detroit, Columbus and more',
            },
        ],
    },
    {
        header: 'December: South',
        sections: [
            {
                header: ['Miami, Houston, Atlanta and more'],
            },
        ],
    },
    {
        header: 'March 2023: NYC',
        sections: [
            {
                header: [''],
            },
        ],
    },
    {
        header: '2023: The Book',
    },
];

export const Roadmap = () => {
    return (
        <>
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
                    </Box>
                </div>
            </S.Roadmap>
        </>
    );
};
