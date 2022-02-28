import * as S from 'components/Explorer/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Building = ({ building }) => {
    const { setActiveHighrise } = useActiveHighriseContext();

    return (
        <S.BuildingContainer
            onClick={() => {
                setActiveHighrise((activeHighrise) => {
                    if (activeHighrise?.index === building.index) {
                        return undefined;
                    }

                    return building;
                });
            }}
        >
            <S.BuildingImage
                alt={`building ${building.index}`}
                src={building.imageSrc}
            />
            <S.BuildingCaption>
                <S.BuildingIndex>
                    Highrise #{`${building.index + 1}`.padStart(2, '0')}
                </S.BuildingIndex>
                <S.BuildingName>{building.name}</S.BuildingName>
            </S.BuildingCaption>
        </S.BuildingContainer>
    );
};
