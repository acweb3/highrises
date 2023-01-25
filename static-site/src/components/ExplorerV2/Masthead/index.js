import { Story } from './Attributes/Story';
import { Traits } from './Attributes/Traits';
import { getBuildingURL, getIndex } from 'common/helpers';
import { useChainConfig } from 'common/hooks/useChainConfig';
import * as S from 'components/ExplorerV2/Masthead/Masthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef } from 'react';

export const Masthead = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const { getOpenseaAssetsURL } = useChainConfig();
    const desktopMastheadRef = useRef(null);

    useEffect(() => {
        desktopMastheadRef.current?.scrollTo(0, 0);
    }, [activeHighrise]);

    return (
        <S.DesktopMasthead
            ref={desktopMastheadRef}
            isActive={Boolean(activeHighrise)}
        >
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.hythacg.com/prints/highrise${`${
                    activeHighrise.index + 1
                }`.padStart(2, '0')}`}
            >
                <S.DesktopMastheadImage src={activeHighrise.posterSrc} />
            </a>
            <S.DesktopMastheadExternalButtonLink
                href={getBuildingURL(activeHighrise)}
            >
                View Detail
            </S.DesktopMastheadExternalButtonLink>
            <S.DesktopMastheadExternalButtonLink
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.hythacg.com/prints/highrise${`${
                    getIndex(activeHighrise) + 1
                }`.padStart(2, '0')}`}
            >
                Order Print
            </S.DesktopMastheadExternalButtonLink>

            {getIndex(activeHighrise) < 55 && (
                <S.DesktopMastheadExternalButtonLink
                    href={getOpenseaAssetsURL(activeHighrise.index)}
                >
                    Digital Collectible
                </S.DesktopMastheadExternalButtonLink>
            )}

            <S.DesktopMastheadAlert>
                Scroll for more info ↴
            </S.DesktopMastheadAlert>
            <Traits
                css={`
                    margin: 24px 0 16px;
                `}
                activeHighrise={activeHighrise}
            />
            <Story isModal activeHighrise={activeHighrise} />
        </S.DesktopMasthead>
    );
};
