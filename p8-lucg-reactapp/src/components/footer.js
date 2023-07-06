import React from 'react';
import logo from '../assets/images/logobw.png';
import '../assets/styles/main.scss'

function Footer(){
    return(<div className='footer'>
        <img className='footerlogo' alt="logo kansas" src={logo}></img>
        <p className='footerbottomtext'>© 2020 Kasa. All rights reserved</p>
    </div>

    )
}

export default Footer;