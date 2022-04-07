import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/Explorer/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Building = ({ building }) => {
    const { activeHighrise, setActiveHighrise } = useActiveHighriseContext();
    const { isMobile } = useWindowSize();

    return (
        <S.Building
            isActive={
                !activeHighrise || building.index === activeHighrise.index
            }
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
                    {(() => {
                        const buildingIndex = `${building.index + 1}`;
                        if (isMobile) {
                            return `#${buildingIndex.padStart(2, '0')}`;
                        }

                        return `Highrise #${buildingIndex.padStart(2, '0')}`;
                    })()}
                </S.BuildingIndex>
                {!isMobile && <S.BuildingName>{building.name}</S.BuildingName>}
            </S.BuildingCaption>
        </S.Building>
    );
};
