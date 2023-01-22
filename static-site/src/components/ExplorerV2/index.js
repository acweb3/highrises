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
                <div
                    css={`
                        height: 100%;
                        z-index: 1;
                    `}
                >
                    <DesktopExplorer />
                </div>
            </S.ExplorerV2>
        </>
    );
};
