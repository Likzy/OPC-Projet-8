import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/main.scss'

function Banner (){
    return(<div className="banner">
        <img className="bannerlogo" alt="logo kansas" src={logo}/>
        <div>
            <a href="/" className="bannerlink">Acceuil</a>
            <a href="/#" className="bannerlink">A Propos</a>
        </div>
    </div>

    )
}

export default Banner;