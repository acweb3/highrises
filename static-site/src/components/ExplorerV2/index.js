import { DesktopExplorer } from 'components/ExplorerV2/DesktopExplorer';
import * as S from 'components/ExplorerV2/ExplorerV2.styled';
import { Paragraph } from 'components/ui/Paragraph';

export const ExplorerV2 = () => {
    return (
        <>
            <div
                className="Main-content"
                css={`
                    background: #fff;
                    min-height: 96px;
                `}
            >
                <S.ExplorerHeader>Explore all highrises</S.ExplorerHeader>
                <Paragraph
                    css={`
                        text-indent: 0;
                        max-width: 750px;
                        margin-bottom: 16px !important;
                    `}
                >
                    Flip through the collection of more than 50 historic
                    American skyscrapers and learn how each one came to be. Sort
                    by architectural style, city, decade, and more to find your
                    favorites!
                </Paragraph>
            </div>
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
