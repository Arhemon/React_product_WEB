import './SignInTable.css'
import TitleInput from '../TitleInput/TitleInput';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import { buttonClick } from '..//../action/action';

interface ISignInTableProps {
    buttonClicked: boolean;
    buttonClick: () => void;
}
function SignInTable(props: ISignInTableProps) {
    const handleClick = () => {
        props.buttonClick();
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

const mapStateToProps = (state: any) => ({
    buttonClicked: state.buttonClicked,
});

const mapDispatchToProps = {
    buttonClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInTable);



