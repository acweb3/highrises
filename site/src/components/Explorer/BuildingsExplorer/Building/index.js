import * as S from 'components/Explorer/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';

export const Building = ({ building }) => {
    const { mastheadRef } = useExplorerRefContext();
    const { activeHighrise, setActiveHighrise } = useActiveHighriseContext();

    return (
        <S.BuildingContainer
            isActive={
                !activeHighrise || building.index === activeHighrise.index
            }
            onClick={() => {
                mastheadRef.current.scrollIntoView({ block: 'start' });
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
