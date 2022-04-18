import { DesktopMasthead } from 'components/Explorer/Masthead/DesktopMasthead';
import { MobileMasthead } from 'components/Explorer/Masthead/MobileMasthead';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <div>
            {activeHighrise && (
                <DesktopMasthead activeHighrise={activeHighrise} />
            )}
            <MobileMasthead />
        </div>
    );
};
