import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'
import Main from './Main'

const funcH = () => {
    window.location.href = './Main';
}

const Description = () => {
    return (
        <div className='mao'>
            <div className='butcont'>
                <button id='plantthis' onClick={funcH}>
                    Plant this Crop
                </button>
            </div>
        </div>
    )
}

export default Description