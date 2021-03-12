import React, { useState } from 'react';
import './AppGoogleMaker.css';
import MapComponent from './components/mapComponent/MapComponent';
import SearchBar from './components/searchBar/SearchBar';
const AppGoogleMaker = () => {
    const [latCoordinates, setlatCoordinates] = useState('')
    const [lgnCoordinates, setlgnCoordinates] = useState('')

    return (

        <div className='mainBox'>
            <h2>GoogleMaker App</h2>
            <hr></hr>
            <div>
                <p>{latCoordinates}</p>
                <p>{lgnCoordinates}</p>
                <div className='searchBar'>
                    <SearchBar setlatCoordinates={setlatCoordinates} setlgnCoordinates={setlgnCoordinates} />
                </div>
                <div className='mapBox'>
                     <MapComponent latCoordinates={latCoordinates} lgnCoordinates={lgnCoordinates}/>
                </div>

            </div>
        </div>
    )


}

export default AppGoogleMaker;
