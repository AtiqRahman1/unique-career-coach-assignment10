import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-black text-center text-white'>
            <p>Copyright © {year}</p>
        </footer>
    );
};

export default Footer;