import * as S from 'components/BuildingDetail/BuildingDetail.styled';
import { MembersArea } from 'components/BuildingDetail/MembersArea';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { navigate } from 'gatsby';
import kebabCase from 'just-kebab-case';
import { useEffect, useState } from 'react';

export const BuildingDetail = ({ activeHighrise, location }) => {
    const [, setImageSrc] = useState(activeHighrise.posterSrc);
    const { initHighrisesState } = useActiveHighriseContext();

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
                    <S.SubHeader>{activeHighrise.highriseNumber}</S.SubHeader>
                </S.BuildingDetailHeader>
                <S.SubHeader isMarginTop>The Story</S.SubHeader>
                <S.Story isModal activeHighrise={activeHighrise} />
                {/* <S.BuildingDetailImageContainer>
                    {imageSrc && <S.BuildingDetailImage src={imageSrc} />}
                    <S.BuildingDetailTabs>
                        <S.BuildingDetailTab
                            isActive={imageSrc === activeHighrise.posterSrc}
                            onClick={() =>
                                setImageSrc(activeHighrise.posterSrc)
                            }
                        >
                            Poster
                        </S.BuildingDetailTab>
                        <S.BuildingDetailTab
                            isActive={imageSrc === activeHighrise.nftSrc}
                            onClick={() => setImageSrc(activeHighrise.nftSrc)}
                        >
                            NFT
                        </S.BuildingDetailTab>
                    </S.BuildingDetailTabs>
                </S.BuildingDetailImageContainer>
                <S.SubHeader>Traits</S.SubHeader>
                <S.Traits activeHighrise={activeHighrise} /> */}
                {activeHighrise && (
                    <MembersArea activeHighrise={activeHighrise} />
                )}
                {activeHighrise && (
                    <S.Purchase
                        activeHighrise={activeHighrise}
                        isCentered
                        isFullPage
                    />
                )}
                {activeHighrise && (
                    <S.ExternalNavigation
                        activeHighrise={activeHighrise}
                        showMap
                    />
                )}
                <MobileMap />
                <S.BuildingDetailBack to="/">
                    ← Back to explorer
                </S.BuildingDetailBack>

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
