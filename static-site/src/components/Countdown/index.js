import * as S from 'components/Countdown/Countdown.styled';
import { useEffect, useState } from 'react';

export const Countdown = ({ countDownTarget, terminatedText }) => {
    const [countdown, setCountdown] = useState('');
    const [isTerminated, setIsTerminated] = useState(false);

    useEffect(() => {
        const sti = setInterval(() => {
            const now = new Date();
            const diff = countDownTarget.valueOf() - now.valueOf();

            const days = Math.max(Math.floor(diff / 1000 / 60 / 60 / 24), 0);
            const hours = Math.max(Math.floor(diff / 1000 / 60 / 60) % 24, 0);
            const minutes = Math.max(Math.floor(diff / 1000 / 60) % 60, 0);
            const seconds = Math.max(Math.floor(diff / 1000) % 60, 0);

            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                setIsTerminated(true);
            }
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => {
            clearInterval(sti);
        };
    }, [countDownTarget]);

    return (
        <S.Countdown isActive={Boolean(countdown)}>
            {isTerminated ? terminatedText : countdown}
        </S.Countdown>
    );
};
