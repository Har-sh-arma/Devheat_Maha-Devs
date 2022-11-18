import React from 'react'
import { useState } from 'react';
import './LSstyle.css';

const Otp = () => {

    const [Credentials, SetCred] = useState({ otp: '' });

    return (
        <div className='pgCont'>
            <div className='center'>
                <h1 id='mainh'>OTP</h1>
                <form onSubmit={e => SetCred({ ...Credentials, username: document.getElementById('otp').value })}>

                    <div className='txt_field'>
                        <input type='password' id='otp' required />
                        <span></span>
                        <label>OTP</label>
                    </div>
                    <input type='submit' value='Verify' />
                </form>
            </div >
        </div>
    )
}

export default Otp