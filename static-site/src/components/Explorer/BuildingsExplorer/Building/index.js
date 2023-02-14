import * as S from 'components/Explorer/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

export const Building = ({ building, onInView }) => {
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
            <S.BuildingAspectRatio>
                <S.BuildingBadge>{building.index + 1}</S.BuildingBadge>
                <S.BuildingImage
                    alt={`building ${building.index + 1}`}
                    src={building.nftSrc}
                    blurSrc={building.blurNftSrc}
                />
            </S.BuildingAspectRatio>

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
