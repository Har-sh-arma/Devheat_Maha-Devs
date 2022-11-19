import React from 'react'
import { useState} from 'react'
import axios from 'axios';
import './LSstyle.css';

const Otp = () => {

    const [Credentials, SetCred] = useState({ otp: '' , email : localStorage.getItem("email")});

    const master_login = ()=>{
        SetCred({ ...Credentials, otp: document.getElementById('otp').value });
        axios.post("http://192.168.2.178:5000/verify", Credentials);
      }
      
      const SetCredentials = ()=>{
        SetCred({ ...Credentials, otp: document.getElementById('otp').value });
      }

    return (
        <div className='pgCont'>
            <div className='center'>
                <h1 id='mainh'>OTP</h1>
                <form onSubmit={master_login}>
                    <div className='txt_field'>
                        <input type='password' id='otp' required maxLength={4} minLength={4} onChange={SetCredentials}/>
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