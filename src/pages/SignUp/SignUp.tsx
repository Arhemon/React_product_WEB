import BodySign from '../../Component/BodySign/bodySign'
import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import user from '..//../image/user.png'
import './SignUp.css'
import Header from '..//..//Component/Header/Header';
import App from '..//..//App'



interface ISignUp {

}

function SignUp() {
    return (
        <>
            <SignTemplate Title='Sign Up'>
                <BodySign />
            </SignTemplate>
        </>
    );
}

export default SignUp;