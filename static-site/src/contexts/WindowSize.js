import { useWindowListener } from 'common/hooks/useWindowListener';
import { breakpointsMap } from 'common/styles/theme/breakpoints';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

const getWindowSize = (size) => {
    if (size >= breakpointsMap.large) {
        return breakpointsMap.large;
    }
    if (size >= breakpointsMap.medium) {
        return breakpointsMap.medium;
    }

    return breakpointsMap.small;
};

const getWindowDimensions = () => ({
    width: window.visualViewport.width,
    height: window.visualViewport.height,
    scrollHeight: document.documentElement.scrollHeight,
});

export const WindowSizeContext = createContext();
export const useWindowSizeContext = () => useContext(WindowSizeContext);

export const WindowSize = ({ children }) => {
    const [windowSize, setWindowSize] = useState(undefined);
    const [debouncedWindowSize] = useDebounce(windowSize, 400);
    const debouncedWindowSizeWidth = debouncedWindowSize?.width;
    const breakpoint = useMemo(
        () => getWindowSize(debouncedWindowSizeWidth),
        [debouncedWindowSizeWidth]
    );

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

    return (
        <WindowSizeContext.Provider
            value={{
                isMobile:
                    debouncedWindowSize && breakpoint <= breakpointsMap.small,
                isTablet:
                    debouncedWindowSize && breakpoint <= breakpointsMap.medium,
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    );
};
