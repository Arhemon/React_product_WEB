import React from 'react';
import './Header.css';
import Burger from '..//../image/Burger.png'
import search from '..//../image/search 1.png'
import Account from '..//../image/Account.png'


interface IHeader {
    clickHeaderFunc: any
    text: string
    foto: any
    imageIcon: string,
    right_btn: string
}

function Header({ clickHeaderFunc, text, foto, imageIcon, right_btn }: IHeader) {
    return (
        <div className='header_container'>
            <button onClick={clickHeaderFunc} className='header_left_btn'>
                <img src={Burger} alt='' className='header_burger' />
            </button>

            <div className={right_btn}>
                <button className='header_searh_btn' >
                    <img src={search} alt='' className='header_burger' />
                </button>
                <button className='header_icon_user'>
                    <img src={foto} alt='' className={imageIcon} />
                    <button className='header_username'>{text}</button>
                </button>
            </div>

        </div>
    );
}

export default Header;

