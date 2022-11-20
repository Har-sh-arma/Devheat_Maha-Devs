import React from 'react'
import './style.css'


const funcH = (id) => {
    const tip = document.getElementById(id);
    tip.placeholder = tip.value;

}


const Details = () => {


    return (
        <div className='background'>
            <div className='olddet'>
                <h1><u>Crop Name</u></h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            </div>

            <div className='care'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            </div>

            <div className='soil_report'>
                <h2><u>Soil Code</u></h2>
                <form id='dateform' >
                    <label className='ln' ></label>
                    <input type='text' id='bckdb' placeholder='' onBlur={funcH('bckdb')} />
                    <br />
                </form>
            </div>

            <div className='date'>
                <h2><u>Date and Area</u></h2>

                <form id='dateform'>
                    <label className='ln'>Date sown : </label>

                    <input type='date' id='bckdb' />
                    <br />
                    <label className='ln'>Area under Cultivation (acre): </label>

                    <input type='number' id='bckdb' onBlur={funcH} />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Details