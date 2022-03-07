import { useEffect, useState } from 'react';

export const Marker = ({ onClick, ...options }) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);

            marker.addListener('click', onClick);
        }
    }, [marker, options, onClick]);

    return null;
};
