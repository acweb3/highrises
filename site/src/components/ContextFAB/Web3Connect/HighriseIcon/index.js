import { pullImage } from 'common/images';
import * as S from 'components/ContextFAB/Web3Connect/HighriseIcon/HighriseIcon.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HighriseIcon = ({ tokenId }) => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(false);
    const { highrises, setActiveHighrise } = useActiveHighriseContext();

    useEffect(() => {
        (async () => {
            const imageSrc = await pullImage('icon', tokenId, 'jpg');
            setImageSrc(imageSrc);
        })();
    }, [tokenId]);

    return (
        <S.HighriseIcon
            onClick={() => {
                setActiveHighrise(highrises[tokenId]);
                navigate(`/building/${tokenId}`);
            }}
        >
            {imageSrc && <S.HighriseIconImage src={imageSrc} />}
        </S.HighriseIcon>
    );
};
