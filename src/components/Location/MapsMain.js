import React from 'react'
import './style.css'

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'

import { useRef, useState } from 'react'
const center = { lat: 48.8584, lng: 2.2945 }


const MapsMain = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <p>Loading...</p>
    }





    const push = () => {
        const node = document.createElement('button')
        node.className = 'butnew';
        const textnode = document.createTextNode("Submit");
        node.appendChild(textnode);
        document.getElementById('bottom').appendChild(node);
    }

    const pop = () => {
        document.querySelector('.butnew').remove();
    }

    return (

        <div className='pg0'>

            {/* <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '50%', height: '50%' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
            >
                <Marker position={center} />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap> */}


            <div className='cont'>
                <h1 id='rot'>Location</h1>

                {/* <Autocomplete id='auto'> */}
                <input type='text' id='sol' onBlur={push} onFocus={pop} ref={originRef} />
                {/* </Autocomplete> */}
            </div>

            <div id='bottom'>
            </div>
            {/* <button /> */}
        </div>

    )
}

export default MapsMain