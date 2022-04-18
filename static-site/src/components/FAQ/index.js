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
        question: 'Are these images or renderings?',
        answer: 'In the early phases of this project, Chris spent hundreds of hours flying around Google Earth in search of highly detailed historic buildings. The intent is to uncover hidden gems in smaller cities rather than only featuring well known buildings in cities like NYC or Chicago. Only historic highrises built before ~1940 are considered in the series, and because of the consistent vertical format, only narrow buildings could be photographed.',
    },
    {
        question: 'How is this work created?',
        answer: 'The Mavic Air 2S drone was used to create these visuals. The drone can only shoot in landscape orientation, so several images were stitched vertically to create a high resolution portrait orientation image. Chris is a licensed part 107 drone pilot.',
    },
    {
        question: 'How were the buildings featured selected?',
        answer: 'Historic highrises follow the format of classical columns with a base, middle and top. The creative choice was made to only feature the top portion of each building, as this is the expressive “face” that makes the building distinctive. Additionally, photographing only the top allows for a more detailed image to appreciate the craftsmanship far above street level that is rarely seen.',
    },
    {
        question: 'What is an NFT?',
        answer: 'NFTs (Non-Fungible Tokens) are unique and verifiable digital assets. They are created onto a Blockchain (Most popularly to Ethereum), which is a decentralized ledger that records who created the asset, as well as any time it changes hands. This technology is very broad, representing the general idea of ownership on the internet.',
    },
    {
        question: 'Why buy a highrise NFT?',
        answer: 'By owning a Highrise NFT you are directly supporting the team of people documenting these historic structures. Each NFT is a 1/1 digital collectible, with a value created by the community that forms around the project. Holding a Highrise NFT will grant you access to the private collectors channel of our discord where we encourage active participation in decision making regarding the project.',
    },
    {
        question: 'Who is the Artist?',
        answer: 'Our founder Chris Hytha has been an active member of the NFT Photography community since July 2021. He has been refining his skills as a photographer / digital artist while earning his bachelor of architecture degree from Drexel University. Chris has gained a following of over 60,000 people on instagram for his unique style of imagery heavily influenced by his architectural background.',
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