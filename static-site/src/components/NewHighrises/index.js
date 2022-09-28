import { Building } from '../ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/NewHighrises/NewHighrises.styled';
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
                    padding: 0 88.5px 32px;
                `}
            >
                <S.NewHighrisesHeader>
                    Explore all highrises
                </S.NewHighrisesHeader>
                <Paragraph
                    css={`
                        text-indent: 0;
                        max-width: 650px;
                        margin-bottom: 16px !important;
                    `}
                >
                    Releasing Oct. 5 at noon EST on OpenSea: Five historic
                    landmark skyscrapers from Los Angeles! New sets of digital
                    collectibles are released every two weeks.
                    <br />
                    Coming next: Chicago.
                </Paragraph>
            </div>

            <div
                css={`
                    display: flex;
                    overflow-x: auto;
                    overflow-y: visible;

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
