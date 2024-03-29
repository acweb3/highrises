/* eslint-disable no-restricted-properties */
import { useEffect } from 'react';

export const useDocumentListener = (
    eventListenerTypes,
    callback,
    deps,
    options
) => {
    // On event listener types or callback change, append event listeners to document
    // and remove stale event listeners.
    useEffect(() => {
        if (Array.isArray(eventListenerTypes)) {
            eventListenerTypes.forEach((eventListenerType) => {
                document.addEventListener(eventListenerType, callback, options);
            });
        } else {
            document.addEventListener(eventListenerTypes, callback, options);
        }

        // Remove stale event listeners on unmount.
        return () => {
            if (Array.isArray(eventListenerTypes)) {
                eventListenerTypes.forEach((eventListenerType) => {
                    document.removeEventListener(eventListenerType, callback);
                });
            } else {
                document.removeEventListener(eventListenerTypes, callback);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventListenerTypes, callback, ...deps, options]);
};
