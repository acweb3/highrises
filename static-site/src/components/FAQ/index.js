import birdsSrc from 'assets/images/birds.png';
import { Clouds } from 'components/Clouds';
import * as S from 'components/FAQ/FAQ.styled';
import { Box } from 'components/ui/Box';
import { Header } from 'components/ui/Header';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

// # TODO => get answers to these questions
const QUESTIONS = [
    {
        question: 'Who is the artist?',
        answer: 'Chris Hytha is a photographer and digital artist who first began offering his work as NFTs in July 2021. His Rowhomes project has surpassed 300E in trading volume on OpenSea, and Chris has more than 60,000 Instagram followers. Chris earned a bachelor’s degree in architecture from Drexel University, and recently became an FAA-certified drone pilot.',
    },
    {
        question: 'How are the buildings selected?',
        answer: 'Highrises focuses on antique skyscrapers from the 1930s and earlier. The preference is for unique buildings with interesting upper features. These details are often difficult or impossible to see from the sidewalk, but they were no less important to the architects. Through drone photography, we can get closer and see more detail than has ever been possible.',
    },
    {
        question: 'How are the stories collected?',
        answer: 'Mark Houser researches each Highrise thoroughly, with special attention to archival newspapers to see how they were described and received when they first appeared. The goal is to go beyond what is commonly known about it, to challenge urban myths and misperceptions, and to understand the people who commissioned and built them.',
    },
    {
        question: 'How have the images been altered?',
        answer: 'After a composite photo is stacked and stitched together from multiple high-res photos taken from the drone, Chris trims out distracting background images and adds light and color effects in Photoshop to enhance the artistic composition.',
    },
    {
        question: 'How many Highrises are there, and which buildings?',
        answer: 'The project will include well over 100 buildings from cities in every part of the country. Upcoming drops will focus on the Northeast, West, Midwest, and South, with a final drop for New York City. Stay tuned and join the mailing list to find out what’s next.',
    },
    {
        question: 'What benefits do I get when I buy a Highrise NFT?',
        answer: 'The first owner receives the first numbered and signed architectural print mailed directly to them anywhere in the United States. (Postage fees apply for a foreign mailing address.) Collectors also get access to all full-res JPGs and photos from their Highrise and a curated collection of historic archival images that relate to it.',
    },
    {
        question:
            'Where can I connect with other Highrises fans and collectors?',
        answer: 'We have a thriving community of fans and collectors that you can join on Discord. Join in the discussion and fun! Members get behind-the-scenes content, chats with the artist, sneak peeks and early access to releases, plus contests and giveaways.',
    },
    {
        question: 'How can I have a Highrise without buying an NFT?',
        answer: 'Each Highrise has a limited run of 100 high-res architectural prints, numbered and signed by the artist. The prints feature the NFT image accompanied by the history and vital statistics of each building.',
    },
    {
        question: 'How does the Highrises project help?',
        answer: 'Besides raising awareness and appreciation for overlooked marvels in cities across the country, the Highrises project reserves 5% of the proceeds from every primary NFT sale. Those funds are directed into a separate account to be donated to worthy charitable causes.',
    },
];

export const FAQ = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    return (
        <S.FAQ>
            <S.Birds src={birdsSrc} />
            <Clouds cloudKey="faq" />
            <div
                style={{
                    width: '100vw',
                }}
            >
                <Box isColumn>
                    <S.FAQContent>
                        <Header>F.A.Q.</Header>
                        <S.Questions>
                            {QUESTIONS.map(({ question, answer }, i) => {
                                return (
                                    <React.Fragment key={question}>
                                        <S.Question
                                            onClick={() => {
                                                setActiveQuestionIndex(
                                                    (activeQuestionIndex) => {
                                                        if (
                                                            activeQuestionIndex ===
                                                            i
                                                        ) {
                                                            return undefined;
                                                        }

                                                        return i;
                                                    }
                                                );
                                            }}
                                        >
                                            {activeQuestionIndex === i ? (
                                                <S.Minus />
                                            ) : (
                                                <S.Plus />
                                            )}
                                            {question}
                                        </S.Question>
                                        {activeQuestionIndex === i && (
                                            <S.Answer>{answer}</S.Answer>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </S.Questions>
                    </S.FAQContent>
                </Box>
            </div>

            <S.FAQImageWrapper>
                <S.FAQImage>
                    <StaticImage
                        src={'../../assets/images/edison-building.webp'}
                        placeholder="blurred"
                        alt=""
                    />
                </S.FAQImage>
            </S.FAQImageWrapper>
        </S.FAQ>
    );
};
