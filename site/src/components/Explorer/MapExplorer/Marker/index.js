import { useEffect, useState } from 'react';

export const Marker = ({ onClick, imageSrc, ...options }) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
        if (!marker) {
            setMarker(
                new window.google.maps.Marker({
                    icon: imageSrc,
                })
            );
        }

        if (marker) {
            marker.setIcon(imageSrc);
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker, imageSrc]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
            marker.addListener('click', onClick);
        }
    }, [marker, options, onClick]);

    return null;
};
