import { DesktopMasthead } from 'components/ExplorerV2/Masthead/DesktopMasthead';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <>
            {activeHighrise && (
                <DesktopMasthead activeHighrise={activeHighrise} />
            )}
        </>
    );
};
