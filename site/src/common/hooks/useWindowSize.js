import { useWindowListener } from 'common/hooks/useWindowListener';
import { breakpointsMap } from 'common/styles/theme/breakpoints';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const getWindowSize = (size) => {
    if (size >= breakpointsMap.large) {
        return breakpointsMap.large;
    }
    if (size >= breakpointsMap.medium) {
        return breakpointsMap.medium;
    }
    if (size >= breakpointsMap.small) {
        return breakpointsMap.small;
    }
    if (size >= breakpointsMap.extraSmall) {
        return breakpointsMap.extraSmall;
    }

    return breakpointsMap.mobile;
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(undefined);
    const [debouncedWindowSize] = useDebounce(windowSize, 400);

    useEffect(() => {
        setWindowSize(getWindowSize(window.visualViewport.width));
    }, []);

    useWindowListener(
        'resize',
        () => {
            setWindowSize(getWindowSize(window.visualViewport.width));
        },
        []
    );

    return {
        windowSize: debouncedWindowSize || windowSize,
        isMobile: debouncedWindowSize === breakpointsMap.mobile,
    };
};
