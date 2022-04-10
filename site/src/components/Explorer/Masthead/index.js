import { DesktopMasthead } from 'components/Explorer/Masthead/DesktopMasthead';
import { MobileMasthead } from 'components/Explorer/Masthead/MobileMasthead';

export const Masthead = () => {
    return (
        <div>
            <DesktopMasthead />
            <MobileMasthead />
        </div>
    );
};
