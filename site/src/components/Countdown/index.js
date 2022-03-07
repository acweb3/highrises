import * as S from 'components/Countdown/Countdown.styled';
import { config } from 'config';
import { useEffect, useState } from 'react';

export const Countdown = () => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const sti = setInterval(() => {
            const now = new Date();
            const diff = config.release.valueOf() - now.valueOf();

            const days = Math.max(Math.floor(diff / 1000 / 60 / 60 / 24), 0);
            const hours = Math.max(Math.floor(diff / 1000 / 60 / 60) % 24, 0);
            const minutes = Math.max(Math.floor(diff / 1000 / 60) % 60, 0);
            const seconds = Math.max(Math.floor(diff / 1000) % 60, 0);
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => {
            clearInterval(sti);
        };
    }, []);

    return <S.Countdown>Next NFT Release {countdown}</S.Countdown>;
};
