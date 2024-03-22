import './SignInTable.css'
import TitleInput from '../TitleInput/TitleInput';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { connect, useDispatch } from 'react-redux';
import { clickSignIn } from '../../Slice/actionRedux';

interface ISignInTableProps {
    handleClick: boolean;
    buttonClick: () => void;
}

function SignInTable() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clickSignIn(true));
    };
    return (
        <>

            <div className='container'  >
                <div className='sign-up-main-frame'  >
                    <div className='sign-up-content-frame'  >

                        <div className='sign-up-submit-frame'  >

                            <div   >
                                <div >
                                    <TitleInput text='Email' placeText='Your Email'></TitleInput>
                                </div>
                            </div >
                        </div >
                        <div className='sign-up-submit-frame_one'  >

                            <div  >
                                <div>
                                    <TitleInput text='Password' placeText='Your Password'></TitleInput>
                                </div>
                            </div >
                        </div >

                        <div className='sign-up-submit-button'>
                            <div className='sign-up-submit-button_into'>
                                <Link to="/" >

                                    <button className='text_submit' onClick={handleClick}>
                                        Sign In
                                    </button>
                                </Link>

                            </div>
                            <span className='text_low'>
                                <button className='text_already'>
                                    Already have an account? Sign In
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default connect()(SignInTable);


