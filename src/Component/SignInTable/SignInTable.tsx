import './SignInTable.css'
import TitleInput from '../TitleInput/TitleInput';

interface ISignInTable {
}

function SignInTable() {
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

                    </div >
                    <div className='sign-up-submit-button' >
                        <div className='sign-up-submit-button_into'  >
                            <span className='text_submit'  >
                                Sign In
                            </span>
                        </div >
                        <span className='text_low'>
                            <button className='text_already'>
                                Already have an account? Sign In
                            </button>
                        </span>
                    </div >
                </div >
            </div >
        </>
    );
}

export default SignInTable;




