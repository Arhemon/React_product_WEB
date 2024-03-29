import React, { useState } from 'react';
import './Header.css';
import Burger from '..//../image/Burger.png'
import search from '..//../image/search 1.png'
import Cancel from '..//..//image/Cancel.png'
import User from '..//..//image/user.png'
import Account from '..//../image/Account.png'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import toggleWindow from '..//Menu/Menu'
import { connect, useDispatch, useSelector } from 'react-redux'; // Подключаем connect
import { clickSignIn } from '../../Slice/actionRedux';
import { log } from 'console';

interface IHeader {
    clickHeaderFunc: any
    text: string
    foto: any
    imageIcon: string,
    right_btn: string,
}

function Header({ clickHeaderFunc, text, foto, imageIcon, right_btn }: IHeader) {


    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClicSign = () => {
        setIsOpen(!isOpen);
    };
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: any) => state.signIn.signIn);

    const handleSignIn = () => {
        dispatch(clickSignIn(true));
    };

    const handleLogout = () => {
        dispatch(clickSignIn(false));
    };



    return (
        <div className='header_container'>
            <button onClick={() => setIsOpen(!isOpen)} className='header_left_btn'>
                <img src={isOpen ? Cancel : Burger} alt='' className='header_burger' />
            </button>
            {isOpen && <Menu />}

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
                    {isLoggedIn ? (
                        <>
                            <div className='header_icon_user_signIn'>
                                <img src={Account} alt='User' className='imageIcon' />
                                <span className='header_username'>Artem Malkin</span>
                            </div>

                        </>
                    ) : (
                        <div className='header_icon_user_no'>
                            <img src={User} alt='Account' className='imageIcon' />
                        </div>

                    )}
                </button>
            </div>

        </div>
    );
}


export default Header;

