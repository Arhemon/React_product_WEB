import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import './SignIn.css'
import SignInTable from '../../Component/SignInTable/SignInTable';



interface ISignIn {

}

function SignInTemplate() {
    return (
        <>
            <SignTemplate Title='Sign In'>
                <SignInTable />
            </SignTemplate>
        </>
    );
}

export default SignInTemplate;