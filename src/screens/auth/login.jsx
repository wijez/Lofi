import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'

import { PiSpotifyLogoBold } from "react-icons/pi";
export default function Login() {
  return (
    <div className='login-page'>
      <img src='https://img.icons8.com/?size=80&id=ZuQiaFCa1vXe&format=gif' alt='logo-spotify' className='logo'/>
        <a href={loginEndpoint}><div className='login-btn'>LOG IN</div></a>
    </div>
  )
};
