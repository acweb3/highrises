import { useWindowSize } from 'common/hooks/useWindowSize';
import { DesktopCloud } from 'components/Cloud/DesktopCloud';
import { MobileCloud } from 'components/Cloud/MobileCloud';

export { Clouds } from 'components/Cloud/Cloud.styled';
export { cloudProps } from 'components/Cloud/DesktopCloud';

export const Cloud = ({ ...props }) => {
    const { isMobile } = useWindowSize();

    if (isMobile === undefined) {
        return null;
    }

    return (
        <>
            {!isMobile ? (
                <DesktopCloud {...props} />
            ) : (
                <MobileCloud {...props} />
            )}
        </>
    );
};
