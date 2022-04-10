import { createContext, useContext, useState } from 'react';

export const MapViewContext = createContext({});
export const useMapViewContext = () => useContext(MapViewContext);

export const MapView = ({ children }) => {
    const [isMapView, setIsMapView] = useState();

    return (
        <MapViewContext.Provider value={{ isMapView, setIsMapView }}>
            {children}
        </MapViewContext.Provider>
    );
};
