import { getBuildingURL } from 'common/helpers';
import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/NewHighrises/NewHighrises.styled';
import { Paragraph } from 'components/ui/Paragraph';
import { Link } from 'gatsby';

export const NewHighrises = ({ highrises }) => {
    return (
        <div
            css={`
                background: #fff;
                min-height: 96px;
            `}
        >
            <div
                className="Main-content"
                css={`
                    padding-top: 32px !important;

                    ${(props) => props.theme.breakpoints.small`
                        padding-top: 0 !important;
                    `}
                `}
            >
                <S.NewHighrisesHeader>
                    Releasing Wednesday Nov. 2nd
                </S.NewHighrisesHeader>
                <Paragraph
                    css={`
                        text-indent: 0;
                        max-width: 650px;
                        margin-bottom: 16px !important;
                    `}
                >
                    {/* <BaseLink.A
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
                    </BaseLink.A> */}
                    {/* <>: </> */}
                    Five historic landmark skyscrapers from the Bay Area! New
                    sets of digital collectibles are released every two weeks.
                    {/* <br />
                    Coming next: San Francisco. */}
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
                        key={getBuildingURL(highrise)}
                        to={getBuildingURL(highrise)}
                    >
                        <Building isNewHighrise building={highrise} />
                    </Link>
                ))}
            </div>
        </div>
    );
};