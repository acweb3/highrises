import * as S from 'components/ExplorerV2/BuildingsExplorer/Building/Building.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

export const Building = ({
    building,
    isNewHighrise,
    onInView,
    isVisible = true,
}) => {
    const { activeHighrise, setActiveHighrise } = useActiveHighriseContext();
    const ref = useRef();
    const { inViewport } = useInViewport(ref, { threshold: 0 });

    useEffect(() => {
        if (inViewport) {
            onInView?.(building.index);
        }
    }, [inViewport, onInView]);

    return (
        <S.Building
            ref={ref}
            isActive={
                !activeHighrise || building.index === activeHighrise.index
            }
            onClick={() => {
                if (!isNewHighrise) {
                    setActiveHighrise(building);
                }
            }}
        >
            {isVisible ? (
                <S.BuildingImage
                    isNewHighrise={isNewHighrise}
                    alt={`building ${building.index}`}
                    src={isNewHighrise ? building.nftSrc : building.imageSrc}
                />
            ) : (
                <S.BuildingPlaceholder />
            )}
            <S.BuildingCaption>
                <S.BuildingIndex.Desktop>
                    {building.name}
                </S.BuildingIndex.Desktop>
                <S.BuildingName>
                    {building.city}
                    {building.state && `, ${building.state}`}
                </S.BuildingName>
            </S.BuildingCaption>
        </S.Building>
    );
};
