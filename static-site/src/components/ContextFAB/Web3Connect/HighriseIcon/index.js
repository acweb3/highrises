import { pullImage } from 'common/images';
import * as S from 'components/ContextFAB/Web3Connect/HighriseIcon/HighriseIcon.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { navigate } from 'gatsby';
import kebabCase from 'just-kebab-case';
import { useEffect, useState } from 'react';

export const HighriseIcon = ({ tokenId }) => {
    const [imageSrc, setImageSrc] = useState(false);
    const { initHighrisesState } = useActiveHighriseContext();

    useEffect(() => {
        (async () => {
            const imageSrc = await pullImage('icon', tokenId, 'webp');
            setImageSrc(imageSrc);
        })();
    }, [tokenId]);

    return (
        <S.HighriseIcon
            onClick={() => {
                navigate(
                    `/building/${kebabCase(initHighrisesState[tokenId].name)}`
                );
            }}
        >
            {imageSrc && <S.HighriseIconImage src={imageSrc} />}
        </S.HighriseIcon>
    );
};
