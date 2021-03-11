import React, {useState} from 'react';
import './AppGoogleMaker.css';
import MapComponent from './components/mapComponent/MapComponent';
import SearchBar from './components/searchBar/SearchBar';
const AppGoogleMaker = () => {
    const [coordinates, setCoordinates] = useState('')

    return (
        
        <div className='mainBox'>
            <h2>GoogleMaker App</h2>
            <hr></hr>
            <div>
                <p>{coordinates}</p>
                <div className='searchBar'>
                    <SearchBar setCoordinates={ setCoordinates}/>
                </div>
                <div className='mapBox'>
                    <MapComponent />
                </div>

            </div>
        </div>
    )


}

export default AppGoogleMaker;
