import React, { useState } from 'react';
import './Header.css';
import Burger from '..//../image/Burger.png'
import search from '..//../image/search 1.png'
import Account from '..//../image/Account.png'
import { Link } from 'react-router-dom';

interface IHeader {
    clickHeaderFunc: any
    text: string
    foto: any
    imageIcon: string,
    right_btn: string
}

function Header({ clickHeaderFunc, text, foto, imageIcon, right_btn }: IHeader) {


    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };


    return (
        <div className='header_container'>
            <button onClick={clickHeaderFunc} className='header_left_btn'>
                <img src={Burger} alt='' className='header_burger' />
            </button>

            <div className="nav-bar">
                <Link to="/">Main</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/search">Search</Link>

            </div>

            <div className={right_btn}>
                <div className={`search-container ${isActive ? 'active' : ''}`}>
                    <button className='header_search_btn ' onClick={handleButtonClick}>
                        <img src={search} alt='' className={`header_search ${isActive ? 'active' : ''}`}
                        />
                    </button>
                    {isActive && (


                        <input
                            type='text'
                            placeholder='Введите информацию...'
                            className='search-input'
                        />
                    )}
                </div>
                <button className='header_icon_user'>
                    <img src={foto} alt='' className={imageIcon} />
                    {/* <button className='header_username'>{text}</button> */}
                </button>
            </div>

        </div>
    );
}

export default Header;

