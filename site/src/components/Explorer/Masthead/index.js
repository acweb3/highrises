import { DesktopMasthead } from 'components/Explorer/Masthead/DesktopMasthead';
import { MobileMasthead } from 'components/Explorer/Masthead/MobileMasthead';

export const Masthead = () => {
    return (
        <>
            <DesktopMasthead />
            <MobileMasthead />
        </>
    );
};
