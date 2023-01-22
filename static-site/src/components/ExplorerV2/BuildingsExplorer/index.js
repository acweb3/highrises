import { useActiveHighriseContext } from '../../../contexts/ActiveHighrise';
import { getBuildingURL } from 'common/helpers';
import { Building } from 'components/ExplorerV2/BuildingsExplorer/Building';
import * as S from 'components/ExplorerV2/BuildingsExplorer/BuildingsExplorer.styled';

export const BuildingsExplorer = ({ activeSort }) => {
    const { highrises } = useActiveHighriseContext();
    // #todo reimplement virtualization
    // const [visibleIndex, setVisibleIndex] = useState(5);

    // const onInView = (index) => {
    //     setVisibleIndex((visibleIndex) => Math.max(visibleIndex, index + 5));
    // };

    // useEffect(() => {
    //     if (activeSort) {
    //         const sortedHighrises = activeSort.sort([...initHighrises.current]);
    //         setHighrises(sortedHighrises);

    //         setActiveHighrise(undefined);
    //     } else if (initHighrises.current) {
    //         setHighrises(initHighrises.current);
    //         setActiveHighrise(undefined);
    //     }
    // }, [activeSort, setActiveHighrise, setHighrises, initHighrises]);

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
