import { BuildingDetail } from 'components/BuildingDetail';
import { ContextFAB } from 'components/ContextFAB';
import { Countdown } from 'components/Countdown';
import { Nav } from 'components/Nav';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { Navigate, useParams } from 'react-router-dom';

export const Building = () => {
    // const { tokenID } = useParams();
    const tokenID = 0;

    const { highrises } = useActiveHighriseContext();

    return (
        <>
            <Nav />
            <Countdown />
            <ContextFAB />
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
