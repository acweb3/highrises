import * as S from 'components/ExplorerV2/MapExplorer/Map/Map.styled';
import { config } from 'config';
import React, { useRef, useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

export const Map = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = useRef(null);
    const [map, setMap] = useState(undefined);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    mapId: config.googleMapsMapID,
                    zoom: 14,
                    disableDefaultUI: true,
                    gestureHandling: 'greedy',
                })
            );
        }
    }, [ref, map]);

    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffect(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    useEffect(() => {
        if (map) {
            ['click', 'idle'].forEach((eventName) =>
                window.google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener('click', onClick);
            }

            if (onIdle) {
                map.addListener('idle', () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            <S.Map ref={ref} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
};
