import { Profile } from 'components/Explorer/Masthead/Team/Profile';
import * as S from 'components/Explorer/Masthead/Team/Team.styled';
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';

export const Twitter = ({ href }) => (
    <S.SocialIcon rel="noopener noreferrer" target="_blank" href={href}>
        <S.TwitterLogo />
    </S.SocialIcon>
);

export const Instagram = ({ href }) => (
    <S.SocialIcon rel="noopener noreferrer" target="_blank" href={href}>
        <S.InstagramLogo />
    </S.SocialIcon>
);

export const Web = ({ href }) => (
    <S.SocialIcon rel="noopener noreferrer" target="_blank" href={href}>
        <S.WebIcon />
    </S.SocialIcon>
);

const PROFILES = [
    {
        header: 'Chris Hytha',
        title: 'Lead artist and project founder',
        copy: 'Chris is a designer and visual artist with a passion for photography and a degree in architecture from Drexel University. His most recent NFT project, Rowhomes, captured the urban fabric of his native Philadelphia, which is also the starting point for Highrises.',
        src: 'chris',
        socials: [
            <Instagram key={0} href="https://www.instagram.com/hytha.cg" />,
            <Twitter key={1} href="https://mobile.twitter.com/Hythacg" />,
        ],
    },
    {
        header: 'Mark Houser',
        title: 'Writer and researcher',
        copy: 'Mark is a Pittsburgh expert on early highrises and author of MultiStories: 55 Antique Skyscrapers & the Business Tycoons Who Built Them. He speaks frequently on the topic and appears in the CuriosityStream documentary History by the Numbers: Skyscrapers.',
        src: 'mark',
        socials: [
            <Web key={0} href="https://www.housertalks.com/" />,
            <Twitter key={1} href="https://mobile.twitter.com/HouserTalks" />,
        ],
    },
    {
        header: 'Andy Gallagher',
        title: 'Software developer',
        copy: 'Andrew is a Philadelphia software engineer interested in creating beautiful interactions for the web and crypto. He is the technical co-founder of the web3 studio a⚡️c and a front-end developer for 1build, a startup backed by Y Combinator.',
        src: 'andy',
        socials: [
            <Twitter key={1} href="https://mobile.twitter.com/aboltc_" />,
        ],
    },
    {
        header: 'Cooper Sherwin',
        title: 'Project advisor',
        copy: "Cooper is a Philadelphia business developer specializing in NFT strategy, crypto culture, and Discord design. He has led multiple projects to OpenSea's #1 trending position, most notably Rowhomes and LinksDAO, the world's greatest golf and leisure club.",
        src: 'cooper',
        socials: [
            <Twitter key={1} href="https://mobile.twitter.com/CoopNFT" />,
        ],
    },
    // {
    //     header: 'Michael B. Stuart',
    //     title: 'Software developer',
    //     copy: 'Michael is a photographer and web designer at Stu Stu Studio, a Lewiston, N.Y., business he runs with his wife, Nicole, a portrait specialist. He enjoys being an active artist and small-time collector in the NFT community.',
    //     src: 'mike',
    //     socials: [
    //         <Twitter key={1} href="https://mobile.twitter.com/mbstuart" />,
    //     ],
    // },
    // {
    //     header: 'Nick Merutka',
    //     title: 'Print designer',
    //     copy: 'Nick is a Brooklyn-based artist and designer in print and digital, and works at a creative group focusing on experiential design and brand growth. He was visual director and sound designer for his class exhibition at the 2018 Venice Biennale.',
    //     src: 'nick',
    //     socials: [
    //         <Instagram key={1} href="https://www.instagram.com/Nico.Day" />,
    //     ],
    // },
];

export const Team = () => {
    const team = useStaticQuery(graphql`
        query Profiles {
            allFile(filter: { relativeDirectory: { eq: "profiles" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);
    const [activeIndex, setActiveIndex] = useState(undefined);

    const teamMap = team.allFile.edges.reduce(
        (acc, { node: { name, publicURL } }) => ({
            ...acc,
            [name]: publicURL,
        }),
        {}
    );

    return (
        <S.Team>
            <S.Profiles>
                {PROFILES.map((profile, i) => {
                    return (
                        <Profile
                            key={`${profile.header}${i}`}
                            {...profile}
                            src={teamMap[profile.src]}
                            isActive={activeIndex === i}
                            onClick={() =>
                                setActiveIndex((activeIndex) =>
                                    activeIndex === i ? undefined : i
                                )
                            }
                        />
                    );
                })}
            </S.Profiles>
        </S.Team>
    );
};
