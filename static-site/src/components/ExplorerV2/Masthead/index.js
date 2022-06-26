import { DesktopMasthead } from 'components/ExplorerV2/Masthead/DesktopMasthead';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return <DesktopMasthead activeHighrise={activeHighrise} />;
};
