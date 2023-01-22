import * as S from 'components/ExplorerV2/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

export const Building = ({ building, onInView, isVisible = true }) => {
    const { activeHighrise, setActiveHighrise } = useActiveHighriseContext();
    const ref = useRef();
    const { inViewport } = useInViewport(ref, { threshold: 0 });

    useEffect(() => {
        if (inViewport) {
            onInView?.(building.index);
        }
    }, [inViewport, onInView, building.index]);

    return (
        <S.Building
            ref={ref}
            isActive={building.index === activeHighrise?.index}
            onClick={() => {
                setActiveHighrise(building);
            }}
        >
            <S.BuildingImage
                alt={`building ${building.index}`}
                src={building.nftSrc}
            />

            <S.BuildingCaption>
                <S.BuildingIndex>{building.name}</S.BuildingIndex>
                <S.BuildingName>
                    {building.city}
                    {building.state && `, ${building.state}`}
                </S.BuildingName>
            </S.BuildingCaption>
        </S.Building>
    );
};
