import inquirerSrc from 'assets/images/inquirer.webp';
import { useDocumentListener } from 'common/hooks/useDocumentListener';
import { Clouds } from 'components/Clouds';
import { Point } from 'components/Roadmap/Point';
import * as S from 'components/Roadmap/Roadmap.styled';
import { Box } from 'components/ui/Box';
import { useRef, useState } from 'react';
import { useThrottle } from 'react-use';

const POINTS = [
    {
        isCompleted: true,
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
        header: 'June: Upstate New York',
        sections: [
            {
                header: 'Buffalo, Albany, Syracuse and more',
            },

            {
                header: '1 Retweet Giveaway: Highrise #32',
                points: [
                    'A random RTer will be selected to win the 1/1 Highrise NFT',
                    'Starting 6/26 12pm EST',
                    'Winner announced 6/28 12pm EST',
                ],
            },
            {
                header: 'Public Auctions - Highrise #22 and #30',
                points: [
                    'Auctions start 6/27 6pm EST',
                    'Auctions close 6/29 6pm EST',
                ],
            },
            {
                header: 'Collector Reserves — 11 Highrise NFTs Available',
                points: [
                    'Set price 1.5 ETH',
                    'Wednesday 6/29 12pm - 1pm EST',
                    'Reserve on <a href="https://highrises.hythacg.com/">https://highrises.hythacg.com/</a>',
                    'Only available for collectors of Rowhomes and Hythacg 1/1 NFTs',
                    'Snapshot will be taken Tuesday 6/28 at 4pm EST. If a Hythacg NFT is in your wallet, that wallet will be eligible to reserve when connected to the website.',
                    'Collectors who reserved a Highrise in the first release are not eligible',
                    'Private Opensea listings will be created for reserved Highrises 6/29 4pm EST',
                ],
            },
            {
                header: 'Public Release',
                points: [
                    'If any Highrise NFTs are unclaimed after collector reserves, they will go live on Opensea for 1.5 ETH 6/29 at 4pm EST',
                ],
            },
        ],
    },
    {
        header: 'July: Northeast',
        sections: [
            {
                header: 'Boston, Providence, Hartford, and more',
            },
        ],
    },
    {
        header: 'September: West',
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
    const roadmapRef = useRef(null);

    const [scroll, setScroll] = useState(0);
    const throttledScroll = useThrottle(scroll, 100);

    useDocumentListener(
        'scroll',
        () => {
            const body = document.body;
            const html = document.documentElement;

            const documentHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );

            setScroll(
                Math.max(Math.min(window.scrollY / documentHeight, 1), 0)
            );
        },
        []
    );

    return (
        <S.Roadmap ref={roadmapRef}>
            <Clouds cloudKey="roadmap" />
            <S.RoadmapImageWrapper>
                <S.RoadmapImage
                    src={inquirerSrc}
                    style={{
                        transform: `translate3D(0, -${
                            50 * throttledScroll
                        }vh, 0)`,
                    }}
                />
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
                                return <Point key={point.header} {...point} />;
                            })}
                        </S.Points>
                    </S.RoadmapChart>
                </Box>
            </div>
        </S.Roadmap>
    );
};
