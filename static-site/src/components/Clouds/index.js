import { DesktopClouds } from 'components/Clouds/DesktopClouds';
import { MobileClouds } from 'components/Clouds/MobileClouds';
import { useWindowSizeContext } from 'contexts/WindowSize';

export const Clouds = ({ ...props }) => {
    const { isMobile } = useWindowSizeContext();

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
