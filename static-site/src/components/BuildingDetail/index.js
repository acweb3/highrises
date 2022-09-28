import { useChainConfig } from 'common/hooks/useChainConfig';
import * as S from 'components/BuildingDetail/BuildingDetail.styled';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { navigate } from 'gatsby';
import kebabCase from 'just-kebab-case';
import { useEffect, useState } from 'react';

export const BuildingDetail = ({ activeHighrise, location }) => {
    const [, setImageSrc] = useState(activeHighrise.posterSrc);
    const { initHighrisesState } = useActiveHighriseContext();
    const { openseaURL, contractAddress } = useChainConfig();

    useEffect(() => {
        setImageSrc(activeHighrise.posterSrc);
    }, [activeHighrise]);

    return (
        <>
            {/** UI */}
            <S.BuildingDetail>
                <S.BuildingDetailBack
                    onClick={() => {
                        if (location?.state?.fromStory) {
                            navigate(-1);
                        } else {
                            navigate('/');
                        }
                    }}
                >
                    ← Back to explorer
                </S.BuildingDetailBack>
                <S.BuildingDetailHeader>
                    <S.Header>{activeHighrise.name}</S.Header>
                    <S.SubHeader>
                        {activeHighrise.city}
                        {activeHighrise.state && `, ${activeHighrise.state}`}
                    </S.SubHeader>
                </S.BuildingDetailHeader>

                <div
                    css={`
                        display: flex;
                        margin-top: 24px;

                        flex-direction: column;

                        ${(props) => props.theme.breakpoints.small`
                            flex-direction: row;
                            margin-top: 48px;
                            margin-bottom: 96px;
                        `}
                    `}
                >
                    <div
                        css={`
                            flex: 1;

                            ${(props) => props.theme.breakpoints.small`
                                margin-right: 12px;
                            `}
                        `}
                    >
                        <img
                            src={activeHighrise.nftSrc}
                            css={`
                                width: 100%;
                            `}
                        />
                    </div>
                    <div
                        css={`
                            margin-left: 0;
                            margin-top: 32px;
                            flex: 1;

                            ${(props) => props.theme.breakpoints.small`
                                margin-top: 0;
                                margin-left: 12px;
                            `}
                        `}
                    >
                        <S.Traits activeHighrise={activeHighrise} />

                        <div
                            css={`
                                display: flex;
                                flex-direction: column;

                                margin-bottom: 32px;

                                & > * {
                                    margin-bottom: 8px;

                                    &:first-of-type {
                                        margin-top: 0;
                                    }
                                }

                                ${(props) => props.theme.breakpoints.small`
                                    flex-direction: row;
                                    margin-bottom: 48px;

                                    & > * {
                                        margin-left: 12px;

                                        &:first-child {
                                            margin-left: 0;
                                        }
                                    }
                                `}
                            `}
                        >
                            <S.BuildingDetailButtonLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`https://www.hythacg.com/prints/highrise${`${
                                    activeHighrise.index + 1
                                }`.padStart(2, '0')}`}
                            >
                                Order Print
                            </S.BuildingDetailButtonLink>
                            {activeHighrise.index > 50 ? (
                                <S.BuildingDetailButton
                                    disabled
                                    css={`
                                        flex: 1;
                                    `}
                                >
                                    Digital Collectible
                                </S.BuildingDetailButton>
                            ) : (
                                <S.BuildingDetailButtonLink
                                    href={`https://${openseaURL}.io/assets/${contractAddress}/${`${activeHighrise.index}`}`}
                                >
                                    Digital Collectible
                                </S.BuildingDetailButtonLink>
                            )}
                        </div>

                        <S.Story isModal activeHighrise={activeHighrise} />
                    </div>
                </div>

                <MobileMap />

                <div
                    css={`
                        display: none;

                        ${(props) => props.theme.breakpoints.small`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        `}
                    `}
                >
                    <S.BuildingDetailButton
                        onClick={() => {
                            if (location?.state?.fromStory) {
                                navigate(-1);
                            } else {
                                navigate('/');
                            }
                        }}
                    >
                        Back to Explorer
                    </S.BuildingDetailButton>
                </div>

                {initHighrisesState.length && (
                    <>
                        {activeHighrise.index <
                            initHighrisesState.length - 1 && (
                            <S.BuildingDetailNextHighrise
                                to={`/building/${kebabCase(
                                    initHighrisesState[activeHighrise.index + 1]
                                        .name
                                )}`}
                            >
                                Next Highrise ↴
                            </S.BuildingDetailNextHighrise>
                        )}
                        {activeHighrise.index > 0 && (
                            <S.BuildingDetailLastHighrise
                                to={`/building/${kebabCase(
                                    initHighrisesState[activeHighrise.index - 1]
                                        .name
                                )}`}
                            >
                                Last Highrise ↴
                            </S.BuildingDetailLastHighrise>
                        )}
                    </>
                )}
            </S.BuildingDetail>
        </>
    );
};
