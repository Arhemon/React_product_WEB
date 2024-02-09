import React from 'react';
import './Header.css';

interface IHeader {
    clickHeaderFunc : any
    text : string
}

function Header ({clickHeaderFunc, text}: IHeader) {
    return (
        <div className='header_container'>
            <button onClick = {clickHeaderFunc} className='header_left_btn'>
                <img src="" alt='' className='header_burger' />
            </button>

            <div className='header_right_btn'>
                <button className='header_searh_btn' >
                    <img src="" alt='' className='header_burger' />
                </button>
                <button className='header_icon_user'> 
                    <img src="" alt='' className='header_image_user' />
                    <button className='header_username'>{text}</button>
                </button>
            </div>
            
        </div>
    );
}

export default Header;