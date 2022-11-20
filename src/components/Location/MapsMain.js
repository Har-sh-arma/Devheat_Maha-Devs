import React from 'react'
import './style.css'
import { useState } from 'react';

const MapsMain = () => {


    const [obj, setObj] = useState({ Location: '' });

    const funcH = () => {
        const dvd = document.querySelector('#sol').value;
        setObj({ ...obj, Location: dvd })
    }


    return (

        <div className='pg0'>

            <div className='cont'>
                <h1 id='rot'>Location</h1>

                {/* <Autocomplete id='auto'> */}
                <input type='text' id='sol' />
                {/* </Autocomplete> */}
            </div>

            <div id='bottom'>
                <button className='butnew' onClick={funcH}>Submit</button>
            </div>
        </div>

    )
}

export default MapsMain