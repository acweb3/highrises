import { BuildingDetail } from 'components/BuildingDetail';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { Navigate, useParams } from 'react-router-dom';

export const Building = () => {
    const { tokenID } = useParams();

    const { highrises } = useActiveHighriseContext();

    return (
        <>
            {(() => {
                if (!highrises.length) {
                    return null;
                }

                if (Number.isNaN(parseInt(tokenID)) || !highrises[tokenID]) {
                    return <Navigate to="/" />;
                }

                return (
                    <BuildingDetail
                        isFullPage
                        activeHighrise={highrises[tokenID]}
                    />
                );
            })()}
        </>
    );
};
