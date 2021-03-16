import React, { useState, useEffect } from "react";
import { useGoogleMaps } from "react-hook-google-maps";

// based on https://developers.google.com/maps/documentation/javascript/adding-a-google-map


const MapComponent = React.memo(function Map(props) {

    const [lat, setLat ]= useState(0)
    const [lgn, setlgn ]= useState(0)

    const updateCoords = () => {
        setLat(parseInt(props.latCoordinates))
        setlgn(parseInt(props.lgnCoordinates))
    }

    const { ref, map, google } = useGoogleMaps(
       ,
        {
            zoom: 14,
            center: {lat:-25.344  ,lng:131.036  },
        }, 
    );
    console.log("render MapWithMarkers");

    useEffect(() => {
        updateCoords();
      }, []);


    

    if (map) {
        // execute when map object is ready
        new google.maps.Marker({ position: {lat: lat , lng: lgn }, map });
    }

    return (
        <div>
            <div ref={ref} style={{ width: '100%', height: 400 }} />
        </div>
    );
})

export default MapComponent






