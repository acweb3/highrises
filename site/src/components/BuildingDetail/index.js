import * as S from 'components/BuildingDetail/BuildingDetail.styled';
import { MobileMap } from 'components/Explorer/MobileExplorer/MobileMap';
import { useEffect } from 'react';
import Helmet from 'react-helmet';

export const BuildingDetail = ({ activeHighrise }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <S.BuildingDetailHeader>
                    <S.Header>{activeHighrise.name}</S.Header>
                    <S.SubHeader>{activeHighrise.highriseNumber}</S.SubHeader>
                </S.BuildingDetailHeader>
                <S.BuildingDetailImageContainer>
                    <S.BuildingDetailImage src={activeHighrise.posterSrc} />
                </S.BuildingDetailImageContainer>
                <S.SubHeader>Traits</S.SubHeader>
                <S.Traits activeHighrise={activeHighrise} />
                <S.Purchase isCentered isFullPage />
                <S.ExternalNavigation activeHighrise={activeHighrise} showMap />
                <MobileMap />
                <S.SubHeader>Story</S.SubHeader>
                <S.Story isModal activeHighrise={activeHighrise} />
                <S.BuildingDetailBack to="/">
                    ← Back to explorer
                </S.BuildingDetailBack>
            </S.BuildingDetail>
        </>
    );
};
