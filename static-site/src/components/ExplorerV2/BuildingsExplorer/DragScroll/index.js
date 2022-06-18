import * as S from 'components/ExplorerV2/BuildingsExplorer/DragScroll/DragScroll.styled';
import { useDraggable } from 'react-use-draggable-scroll';

export const DragScroll = ({ buildingExplorerRef, children }) => {
    const { events } = useDraggable(buildingExplorerRef);

    return (
        <S.DragScroll ref={buildingExplorerRef} {...events}>
            {children}
        </S.DragScroll>
    );
};
