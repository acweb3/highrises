import './Popup.css';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Marker = ({ onClick, iconSrc, index, position, ...options }) => {
    const [marker, setMarker] = useState();
    const [hasRef, setHasRef] = useState(false);
    const ref = useRef();
    const markerIndexRef = useRef();
    const iconSrcRef = useRef();

    const onRefChange = useCallback((node) => {
        if (node !== null) {
            ref.current = node;
            setHasRef(true);
        }
    }, []); // adjust deps

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
                    'components/ExplorerV2/MapExplorer/Marker/Popup'
                );

                setMarker(
                    new Popup(position, ref.current, index, onClick, iconSrc)
                );
            }
        };

        if (hasRef) {
            createPopup();
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.onRemove();
            }
        };
    }, [hasRef, marker, position, index, onClick, iconSrc]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
            marker.addListener('click', onClick);
        }
    }, [marker, options, onClick]);

    return (
        <div>
            <div ref={onRefChange}></div>
        </div>
    );
};
