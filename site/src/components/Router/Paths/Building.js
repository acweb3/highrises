import { BuildingDetail } from 'components/BuildingDetail';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { Navigate, useParams } from 'react-router-dom';

export const Building = () => {
    const { tokenID } = useParams();
    const { initHighrisesState } = useActiveHighriseContext();

    return (
        <>
            {(() => {
                if (!initHighrisesState.length) {
                    return null;
                }

                if (
                    Number.isNaN(parseInt(tokenID)) ||
                    !initHighrisesState[tokenID]
                ) {
                    return <Navigate to="/" />;
                }

                return (
                    <BuildingDetail
                        activeHighrise={initHighrisesState[tokenID]}
                    />
                );
            })()}
        </>
    );
};
