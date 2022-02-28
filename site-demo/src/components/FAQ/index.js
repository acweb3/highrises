import edisonBuildingSrc from 'assets/images/edison-building.png';
import { Cloud, Clouds, cloudProps } from 'components/Cloud';
import * as S from 'components/FAQ/FAQ.styled';
import { Header } from 'components/ui/Header';
import React, { useState } from 'react';

// # TODO => get answers to these questions
const QUESTIONS = [
    {
        question: 'Are these images or renderings?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sodales gravida. Nulla tempus tempus leo, non consequat ligula congue egestas. Ut dapibus tincidunt pellentesque. Proin quis vestibulum quam. Nunc ligula dolor, gravida id velit sed, viverra pulvinar lorem.',
    },
    {
        question: 'How is this work created?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sodales gravida. Nulla tempus tempus leo, non consequat ligula congue egestas. Ut dapibus tincidunt pellentesque. Proin quis vestibulum quam. Nunc ligula dolor, gravida id velit sed, viverra pulvinar lorem.',
    },
    {
        question: 'How were the buildings featured selected?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sodales gravida. Nulla tempus tempus leo, non consequat ligula congue egestas. Ut dapibus tincidunt pellentesque. Proin quis vestibulum quam. Nunc ligula dolor, gravida id velit sed, viverra pulvinar lorem.',
    },
    {
        question: 'What is an NFT?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sodales gravida. Nulla tempus tempus leo, non consequat ligula congue egestas. Ut dapibus tincidunt pellentesque. Proin quis vestibulum quam. Nunc ligula dolor, gravida id velit sed, viverra pulvinar lorem.',
    },
    {
        question: 'Why buy a highrise NFT?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sodales gravida. Nulla tempus tempus leo, non consequat ligula congue egestas. Ut dapibus tincidunt pellentesque. Proin quis vestibulum quam. Nunc ligula dolor, gravida id velit sed, viverra pulvinar lorem.',
    },
];

export const FAQ = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(undefined);
    return (
        <S.FAQ>
            <Clouds>
                {cloudProps.faq.map((styles, i) => (
                    <Cloud styles={styles} key={i} />
                ))}
            </Clouds>

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
                                                if (activeQuestionIndex === i) {
                                                    return undefined;
                                                }

                                                return i;
                                            }
                                        );
                                    }}
                                >
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

            <S.FAQImage src={edisonBuildingSrc} />
        </S.FAQ>
    );
};
