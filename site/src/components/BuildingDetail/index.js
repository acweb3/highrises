import * as S from 'components/BuildingDetail/BuildingDetail.styled';
import { MembersArea } from 'components/BuildingDetail/MembersArea';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

export const BuildingDetail = ({ activeHighrise }) => {
    const [, setImageSrc] = useState(activeHighrise.posterSrc);
    const { initHighrisesState } = useActiveHighriseContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeHighrise]);

    useEffect(() => {
        setImageSrc(activeHighrise.posterSrc);
    }, [activeHighrise]);

    return (
        <>
            {/** Metadata */}
            <Helmet>
                <title>{activeHighrise.name} — HYTHA.CG</title>
            </Helmet>
            {/** UI */}
            <S.BuildingDetail>
                <S.BuildingDetailBack to="/">
                    ← Back to explorer
                </S.BuildingDetailBack>
                {activeHighrise && (
                    <MembersArea activeHighrise={activeHighrise} />
                )}
                <S.BuildingDetailHeader>
                    <S.Header>{activeHighrise.name}</S.Header>
                    <S.SubHeader>{activeHighrise.highriseNumber}</S.SubHeader>
                </S.BuildingDetailHeader>
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
                <S.SubHeader>Story</S.SubHeader>
                <S.Story isModal activeHighrise={activeHighrise} />
                <S.BuildingDetailBack to="/">
                    ← Back to explorer
                </S.BuildingDetailBack>

                {initHighrisesState.length && (
                    <>
                        {activeHighrise.index <
                            initHighrisesState.length - 1 && (
                            <S.BuildingDetailNextHighrise
                                to={`/building/${activeHighrise.index + 1}`}
                            >
                                Next Highrise ↴
                            </S.BuildingDetailNextHighrise>
                        )}
                        {activeHighrise.index > 0 && (
                            <S.BuildingDetailLastHighrise
                                to={`/building/${activeHighrise.index - 1}`}
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
