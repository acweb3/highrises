import { useEffect, useState } from 'react';

export const useDelayed = (next, delay) => {
    const [state, setState] = useState(next);

    useEffect(() => {
        const sto = setTimeout(() => {
            setState(next);
        }, delay);

        return () => {
            clearTimeout(sto);
        };
    }, [next, delay]);

    return state;
};
