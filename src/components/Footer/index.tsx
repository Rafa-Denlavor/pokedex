import './Footer.css';
import React from 'react';

interface Footer {
    logo?: string;
    path: string;
    arrow?: string;
}

const Footer = ({logo = 'images/logo.svg', path, arrow = 'images/seta.svg'} : Footer) => {

    return (
        <div className='footer'>
            <img className='logo' src={logo} alt="Logo Pokemon" />
            <a className='top' href={path}>
                <img src={arrow} alt='Seta para cima' />
            </a>
        </div>
    )
}

export default Footer;