import { highrises as highrisesData } from 'assets/data/highrises';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useEffect, useRef } from 'react';

const pullImage = async (index) =>
    (await import(`assets/images/slide-highrises/${index}.png`)).default;

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, setActiveHighrise, setHighrises } =
        useActiveHighriseContext();
    const initHighrises = useRef();
    const { buildingExplorerRef } = useExplorerRefContext();

    useEffect(() => {
        (async () => {
            const highriseWithImage = await Promise.all(
                // # TODO => Remove this slice
                highrisesData.slice(0, 15).map(async (highrise, index) => {
                    return {
                        ...highrise,
                        imageSrc: await pullImage(index),
                        index,
                    };
                })
            );

            setHighrises(highriseWithImage);
            initHighrises.current = highriseWithImage;
        })();
    }, [setHighrises]);

    useEffect(() => {
        setActiveHighrise(undefined);

        if (activeSort) {
            buildingExplorerRef.current.children[0].scrollIntoView({
                inline: 'center',
                block: 'end',
            });
            setHighrises(activeSort.sort([...initHighrises.current]));
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
        }
    }, [activeSort, setActiveHighrise, setHighrises, buildingExplorerRef]);

    return (
        <S.FlexWrapper ref={buildingExplorerRef}>
            {highrises.map((building, index) => (
                <Building key={index} building={building} />
            ))}
        </S.FlexWrapper>
    );
};
