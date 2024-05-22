import * as S from 'components/Explorer/BuildingsExplorer/Building/Building.styled';
import { HoverDescription } from 'components/ui/HoverDescription';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMobilePopoverContext } from 'contexts/MobilePopover';
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

export const Building = ({ building, onInView }) => {
    const { activeHighrise, setActiveHighrise, setIsAboutOverride } =
        useActiveHighriseContext();
    const { setIsMobilePopoverOpen } = useMobilePopoverContext();
    const ref = useRef();
    const { inViewport } = useInViewport(ref, { threshold: 0 });

    useEffect(() => {
        if (inViewport) {
            onInView?.(building.index);
        }
    }, [inViewport, onInView, building.index]);

    useEffect(() => {
        if (activeHighrise) {
            setIsMobilePopoverOpen(true);
        }
    }, [activeHighrise, setIsMobilePopoverOpen]);

    return (
        <HoverDescription
            ref={ref}
            isActive={building.index === activeHighrise?.index}
            onClick={() => {
                setIsAboutOverride(false);
                setActiveHighrise(building);
            }}
            title={building.name}
            subtitle={
                <>
                    {building.city}
                    {building.state && `, ${building.state}`}
                </>
            }
        >
            <S.BuildingAspectRatio>
                <S.BuildingBuildingBadge>
                    {building.accessIndex + 1}
                </S.BuildingBuildingBadge>
                <S.BuildingImage
                    alt={`building ${building.index + 1}`}
                    src={building.nftSrc}
                    blurSrc={building.blurNftSrc}
                />
            </S.BuildingAspectRatio>
        </HoverDescription>
    );
};
