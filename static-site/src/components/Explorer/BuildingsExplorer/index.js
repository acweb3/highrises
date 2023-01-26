import { getBuildingURL } from 'common/helpers';
import { Building } from 'components/Explorer/BuildingsExplorer/Building';
import * as S from 'components/Explorer/BuildingsExplorer/BuildingsExplorer.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect } from 'react';

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises, setActiveHighrise, setHighrises, initHighrises } =
        useActiveHighriseContext();
    // #todo reimplement virtualization
    // const [visibleIndex, setVisibleIndex] = useState(5);

    // const onInView = (index) => {
    //     setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
    // };

    useEffect(() => {
        if (activeSort) {
            const sortedHighrises = activeSort.sort([...initHighrises.current]);

            setHighrises(sortedHighrises);
            setActiveHighrise(sortedHighrises[0]);
        } else if (initHighrises.current) {
            setHighrises(initHighrises.current);
            setActiveHighrise(initHighrises.current[0]);
        }
    }, [activeSort, setActiveHighrise, setHighrises, initHighrises]);

    return (
        <S.BuildingsExplorer>
            {highrises.map((building) => (
                <Building
                    key={getBuildingURL(building)}
                    building={building}
                    // #todo reimplement virtualization
                    // isVisible={index <= visibleIndex}
                    // onInView={onInView}
                />
            ))}
        </S.BuildingsExplorer>
    );
};
