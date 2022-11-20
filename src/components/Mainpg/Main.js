import React from 'react'
import { useState, useEffect } from 'react'
import Extra from '../Extra/Extra'
import './style.css'
const Main = () => {

    const [crop, setCrop] = useState('empty');
    const [count, setCount] = useState(0);
    const funcH = () => {

        const item = document.getElementById('menu').value;
        localStorage.setItem('CropName', item);
        setCrop(document.getElementById('menu').value);
        window.location.href = './Description';
    }

    const apndch = () => {

        if (count < 4) {
            const item = document.getElementById('menu').value;
            const node = document.createElement('button');
            node.className = 'cropind';
            node.id = 'crop' + (count + 1);
            const textnode = document.createTextNode(item);
            node.appendChild(textnode);
            document.querySelector('.cardhldr').appendChild(node);
        }
        setCount(
            count + 1
        )

    }

    const crp = localStorage.getItem('CropName');

    useEffect(() => {
        console.log(crop);
    })
    return (
        <div className='mao' onLoad={apndch}>

            <Extra />
            <div className='current'>
                <h2>Planted Crops</h2>
                <div className='cardhldr'>
                    {/* <button className='cropind' id='crop1'>{crp}</button>
                    <button className='cropind' id='crop2'>{crp}</button>
                    <button className='cropind' id='crop3'>{crp}</button>
                    <button className='cropind' id='crop4'>{crp}</button> */}
                </div>
            </div>

            <div className='sugg'>
                <h2>Suggested Crops</h2>

                <select id="menu" name="carlist" form="carform">
                    <option>Bajra</option>
                    <option>Wheat</option>
                    <option>Rice</option>
                </select>

                <button className='but' onClick={funcH}> Get Discription </button>
                <button id='ptc' onClick={apndch}> Plant this crop </button>
            </div>
        </div>
    )
}

export default Main