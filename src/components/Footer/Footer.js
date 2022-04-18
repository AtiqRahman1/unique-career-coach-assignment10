import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-black text-white '>
            <p>Copyright © {year}</p>
        </footer>
    );
};

export default Footer;