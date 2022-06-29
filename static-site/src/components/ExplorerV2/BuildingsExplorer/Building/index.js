import * as S from 'components/ExplorerV2/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const Building = ({ building }) => {
    const { activeHighrise, setActiveHighrise } = useActiveHighriseContext();
    const buildingIndex = `${building.index + 1}`;

    return (
        <S.Building
            isActive={
                !activeHighrise || building.index === activeHighrise.index
            }
            onClick={(e) => {
                setActiveHighrise(building);
            }}
        >
            <S.BuildingImage
                alt={`building ${building.index}`}
                src={building.imageSrc}
            />
            <S.BuildingCaption>
                <S.BuildingIndex.Desktop>
                    Highrise #{buildingIndex.padStart(2, '0')}
                </S.BuildingIndex.Desktop>
                <S.BuildingName>{building.name}</S.BuildingName>
            </S.BuildingCaption>
        </S.Building>
    );
};