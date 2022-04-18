import { DesktopExplorer } from 'components/Explorer/DesktopExplorer';
import { MobileExplorer } from 'components/Explorer/MobileExplorer';
import { useExplorerRefContext } from 'contexts/ExplorerRef';

export const Explorer = () => {
    const { mastheadRef } = useExplorerRefContext();

    return (
        <div ref={mastheadRef}>
            <DesktopExplorer />
            <MobileExplorer />
        </div>
    );
};
