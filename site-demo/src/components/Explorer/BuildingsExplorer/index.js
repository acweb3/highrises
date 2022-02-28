import { SORTS } from './BuildingsMasthead';
import { highrises as highrisesData } from 'assets/data/highrises';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useEffect, useRef, useState } from 'react';

const pullImage = async (index) =>
    (await import(`assets/images/slide-highrises/${index}.png`)).default;

export const BuildingsExplorer = ({ activeSort }) => {
    const [highrises, setHighrises] = useState([]);
    const initHighrises = useRef();

    useEffect(() => {
        (async () => {
            const highriseWithImage = await Promise.all(
                highrisesData.slice(0, 14).map(async (highrise, index) => {
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
    }, []);

    useEffect(() => {
        if (activeSort) {
            setHighrises((highrises) => [...highrises].sort(SORTS[activeSort]));
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
        }
    }, [activeSort]);

    return (
        <S.FlexWrapper>
            {highrises.map((building, index) => (
                <Building key={index} building={building} />
            ))}
        </S.FlexWrapper>
    );
};
