import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';

export const ExplorerV2 = () => {
    return (
        <>
            <S.ExplorerV2
                css={`
                    position: relative;
                    background: #a8b5bd;
                    transition: border-color 400ms;
                `}
            >
                <DesktopExplorer />
            </S.ExplorerV2>
        </>
    );
};
