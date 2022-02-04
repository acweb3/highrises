import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopClouds } from 'components/Clouds/DesktopClouds';
import { MobileClouds } from 'components/Clouds/MobileClouds';

export const Clouds = ({ ...props }) => {
    const { isMobile } = useWindowSize();

    if (isMobile === undefined) {
        return null;
    }

    return (
        <>
            {!isMobile ? (
                <DesktopClouds {...props} />
            ) : (
                <MobileClouds {...props} />
            )}
        </>
    );
};
