import './Popup.css';
import { useEffect, useRef, useState } from 'react';

export const Marker = ({ onClick, index, position, ...options }) => {
    const [marker, setMarker] = useState();
    const ref = useRef();

    useEffect(() => {
        const createPopup = async () => {
            if (!marker) {
                const { Popup } = await import(
                    'components/Explorer/MapExplorer/Marker/Popup'
                );

                setMarker(new Popup(position, ref.current, index, onClick));
            }
        };

        createPopup();

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.onRemove();
            }
        };
    }, [marker, position, index, onClick]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
            marker.addListener('click', onClick);
        }
    }, [marker, options, onClick]);

    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
};
