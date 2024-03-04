import './RegistrationConfirmTemplate.css'
import Header from '..//..//Component/Header/Header';
import App from '..//..//App'
import user from '..//../image/user.png'
import ConfirmRegistration from '../../Component/ConfirmRegistration/ConfirmRegistration';
import SignTemplate from '../../Component/SignTemplate/SignTemplate'

interface IRegistrationConfirmTemplate {
}

function RegistrationConfirmTemplate() {
    return (
        <>
            <SignTemplate Title='Sign Up'>
                <ConfirmRegistration Text='Please activate your account with the activation
    link in the email example@gmail.com.        
     Please, check your email'/>
            </SignTemplate>
        </>
    );
}

export default RegistrationConfirmTemplate;






