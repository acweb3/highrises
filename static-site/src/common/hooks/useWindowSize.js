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

const getWindowDimensions = () => ({
    width: window.visualViewport.width,
    height: window.visualViewport.height,
    scrollHeight: document.documentElement.scrollHeight,
});

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    const [debouncedWindowSize] = useDebounce(windowSize, 400);

    useEffect(() => {
        setWindowSize(getWindowDimensions());
    }, []);

    useWindowListener(
        'resize',
        () => {
            setWindowSize(getWindowDimensions());
        },
        []
    );

    return {
        windowSize: debouncedWindowSize || windowSize,
        isMobile: debouncedWindowSize
            ? debouncedWindowSize === breakpointsMap.mobile ||
              debouncedWindowSize === breakpointsMap.extraSmall ||
              debouncedWindowSize === breakpointsMap.small
            : undefined,
    };
};
