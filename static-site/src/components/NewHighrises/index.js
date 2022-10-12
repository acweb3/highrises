import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/NewHighrises/NewHighrises.styled';
import { BaseLink } from 'components/ui/BaseLink';
import { Paragraph } from 'components/ui/Paragraph';
import { Link } from 'gatsby';
import kebabCase from 'just-kebab-case';

export const NewHighrises = ({ highrises }) => {
    return (
        <div
            css={`
                background: #fff;
                padding: 48px 0 32px;
                min-height: 96px;

                ${(props) => props.theme.breakpoints.small`
                    padding: 0 0 32px;
                `}
            `}
        >
            <div
                css={`
                    padding: 0 64px 32px;

                    ${(props) => props.theme.breakpoints.small`
                        padding: 0 88.5px 32px;
                    `}
                `}
            >
                <S.NewHighrisesHeader>New highrises</S.NewHighrisesHeader>
                <Paragraph
                    css={`
                        text-indent: 0;
                        max-width: 650px;
                        margin-bottom: 16px !important;
                    `}
                >
                    <BaseLink.A
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://opensea.io/collection/highrises"
                        css={`
                            display: inline-block;
                            padding: 0;
                            margin: 0;
                            height: initial;
                            text-transform: none;
                            color: #3b5d78;
                            font-family: poppins;
                            font-size: 16px;
                            text-decoration: underline;
                        `}
                    >
                        Now available on OpenSea
                    </BaseLink.A>
                    : Five historic landmark skyscrapers from Los Angeles! New
                    sets of digital collectibles are released every two weeks.
                    <br />
                    Coming next: Chicago.
                </Paragraph>
            </div>

            <div
                css={`
                    display: flex;
                    overflow-x: auto;
                    overflow-y: hidden;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                `}
            >
                {highrises.map((highrise) => (
                    <Link
                        css={`
                            text-decoration: none;

                            & > * {
                                margin: 0 !important;
                            }

                            opacity: 0.94;

                            &:hover {
                                opacity: 1;
                            }
                        `}
                        key={highrise.name}
                        to={`/building/${kebabCase(highrise.name)}`}
                    >
                        <Building isNewHighrise building={highrise} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
