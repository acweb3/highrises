import andySrc from 'assets/images/profiles/andy.jpg';
import chrisSrc from 'assets/images/profiles/chris.jpg';
import cooperSrc from 'assets/images/profiles/cooper.png';
import markSrc from 'assets/images/profiles/mark.webp';
import mikeSrc from 'assets/images/profiles/mike.jpeg';
import nickSrc from 'assets/images/profiles/nick.jpg';
import { Profile } from 'components/Team/Profile';
import * as S from 'components/Team/Team.styled';
import { Header } from 'components/ui/Header';

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

const PROFILES = [
    {
        header: 'Chris Hytha',
        title: 'Lead artist and project founder',
        copy: 'Chris is a designer and visual artist with a passion for photography and a degree in architecture from Drexel University. His most recent NFT project, Rowhomes, captured the urban fabric of his native Philadelphia, which is also the starting point for Highrises.',
        src: chrisSrc,
        socials: [
            <Instagram key={0} href="https://www.instagram.com/hytha.cg" />,
            <Twitter key={1} href="https://mobile.twitter.com/Hythacg" />,
        ],
    },
    {
        header: 'Mark Houser',
        title: 'Writer and researcher',
        copy: 'Mark is a Pittsburgh expert on early highrises and author of MultiStories: 55 Antique Skyscrapers & the Business Tycoons Who Built Them. He speaks frequently on the topic and appears in the CuriosityStream documentary History by the Numbers: Skyscrapers.',
        src: markSrc,
        socials: [
            <Instagram key={0} href="https://www.instagram.com/HouserTalks" />,
            <Twitter key={1} href="https://mobile.twitter.com/HouserTalks" />,
        ],
    },
    {
        header: 'Cooper Sherwin',
        title: 'Web3 community developer and project advisor',
        copy: "Cooper is a Philadelphia business developer specializing in NFT strategy, crypto culture, and Discord design. He has led multiple projects to OpenSea's #1 trending position, most notably Rowhomes and LinksDAO, the world's greatest golf and leisure club.",
        src: cooperSrc,
        socials: [
            <Twitter key={1} href="https://mobile.twitter.com/CoopNFT" />,
        ],
    },
    {
        header: 'Andy Gallagher',
        title: 'Software developer',
        copy: 'Andrew is a Philadelphia software engineer interested in creating beautiful interactions for the web and crypto. He is the technical co-founder of the web3 studio a⚡️c and a front-end developer for 1build, a startup backed by Y Combinator.',
        src: andySrc,
        socials: [
            <Twitter key={1} href="https://mobile.twitter.com/0x_reefer" />,
        ],
    },
    {
        header: 'Michael B. Stuart',
        title: 'Software developer',
        copy: 'Michael is a photographer and web designer at Stu Stu Studio, a Lewiston, N.Y., business he runs with his wife, Nicole, a portrait specialist. He enjoys being an active artist and small-time collector in the NFT community.',
        src: mikeSrc,
        socials: [
            <Twitter key={1} href="https://mobile.twitter.com/mbstuart" />,
        ],
    },
    {
        header: 'Nick Merutka',
        title: 'Poster developer',
        copy: 'Nick is a Brooklyn graphic designer and artist specializing in print and digital work. He was sole visual director and light designer for an exhibit of his Iowa State class project at the 2018 Venice Biennale of Architecture.',
        src: nickSrc,
        socials: [
            <Instagram key={1} href="https://www.instagram.com/Nico.Day" />,
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
            <S.BorderBottom />
        </S.Team>
    );
};
