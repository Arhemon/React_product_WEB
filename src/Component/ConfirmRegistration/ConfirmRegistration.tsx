import './ConfirmRegistration.css'



interface IConfirmRegistration {
}

function ConfirmRegistration({ }: IConfirmRegistration) {
    return (
        <>
            <div className='container_registration'>
                <div className='wrapper_registration'>
                    <p className='registration_text'> Please activate your account with the activation
                        link in the email example@gmail.com.<br></br> <a href="#" className='registration_link'>Please, check your email</a>
                    </p>
                    <button className='registration_btn_home'>Go to Home</button>
                </div>
            </div>
        </>
    );
}

export default ConfirmRegistration;




