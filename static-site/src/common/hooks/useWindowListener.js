/* eslint-disable no-restricted-properties */
import { useEffect } from 'react';

export const useWindowListener = (
    eventListenerTypes,
    callback,
    deps,
    options
) => {
    // On event listener types or callback change, append event listeners to window
    // and remove stale event listeners.
    useEffect(() => {
        if (Array.isArray(eventListenerTypes)) {
            eventListenerTypes.forEach((eventListenerType) => {
                window.addEventListener(eventListenerType, callback, options);
            });
        } else {
            window.addEventListener(eventListenerTypes, callback, options);
        }

        // Remove stale event listeners on unmount.
        return () => {
            if (Array.isArray(eventListenerTypes)) {
                eventListenerTypes.forEach((eventListenerType) => {
                    window.removeEventListener(eventListenerType, callback);
                });
            } else {
                window.removeEventListener(eventListenerTypes, callback);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventListenerTypes, callback, ...deps, options]);
};
