import './SuccessTemplate.css'
import Header from '..//..//Component/Header/Header';
import App from '..//..//App'
import user from '..//../image/user.png'
import ConfirmRegistration from '../../Component/ConfirmRegistration/ConfirmRegistration';
import SignTemplate from '../../Component/SignTemplate/SignTemplate'

interface ISuccessTemplate {
}

function SuccessTemplate() {
    return (
        <>
            <SignTemplate Title='Success'>
                <ConfirmRegistration Text='Email confirmed.
Your registration is now completed'/>
            </SignTemplate>
        </>
    );
}

export default SuccessTemplate;






