import * as S from 'components/BuildingDetail/BuildingDetail.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import Helmet from 'react-helmet';

export const BuildingDetail = ({ activeHighrise, isFullPage }) => {
    const { setIsExpandedView } = useActiveHighriseContext();

    return (
        <>
            {/** Metadata */}
            <Helmet>
                <title>{activeHighrise.name} — HYTHA.CG</title>
            </Helmet>
            {/** UI */}
            <S.BuildingDetail isFullPage={isFullPage}>
                {!isFullPage && (
                    <S.CloseButton
                        onClick={() => {
                            setIsExpandedView(false);
                        }}
                    >
                        <S.Close />
                    </S.CloseButton>
                )}
                <S.BuildingDetailHeader>
                    <S.Header>{activeHighrise.name}</S.Header>
                    <S.SubHeader>{activeHighrise.highriseNumber}</S.SubHeader>
                </S.BuildingDetailHeader>
                <S.BuildingDetailImageContainer>
                    <S.BuildingDetailImage src={activeHighrise.posterSrc} />
                </S.BuildingDetailImageContainer>
                <S.SubHeader>Traits</S.SubHeader>
                <S.Traits activeHighrise={activeHighrise} />
                <S.Purchase isCentered />
                <S.SubHeader>Story</S.SubHeader>
                <S.Story isModal activeHighrise={activeHighrise} />
            </S.BuildingDetail>
        </>
    );
};
