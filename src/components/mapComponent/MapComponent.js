import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";
import './MapComponent.css';

const MapComponent = () => {

    const { ref, map, google } = useGoogleMaps(
        
        'AIzaSyAR-A7EmvWIJHXem2yxnvWKUvZjlqKGFIU',
       
        {
            center: { lat: 0, lng: 0 },
            zoom: 3,
        },
    );
    console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
    console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class

    return (
        <div className='map'>

            <div ref={ref} style={{ width: '100%', height: 500 }} />

        </div>
    )


}

export default MapComponent;