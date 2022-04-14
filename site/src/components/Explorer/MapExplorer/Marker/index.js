import './Popup.css';
import { useEffect, useRef, useState } from 'react';

export const Marker = ({ onClick, iconSrc, index, position, ...options }) => {
    const [marker, setMarker] = useState();
    const ref = useRef();
    const markerIndexRef = useRef();
    const iconSrcRef = useRef();

    useEffect(() => {
        const createPopup = async () => {
            if (
                !marker ||
                markerIndexRef.current !== index ||
                iconSrcRef.current !== iconSrc
            ) {
                marker?.onRemove();
                markerIndexRef.current = index;
                iconSrcRef.current = iconSrc;
                const { Popup } = await import(
                    'components/Explorer/MapExplorer/Marker/Popup'
                );

                setMarker(
                    new Popup(position, ref.current, index, onClick, iconSrc)
                );
            }
        };

        createPopup();

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.onRemove();
            }
        };
    }, [marker, position, index, onClick, iconSrc]);

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
