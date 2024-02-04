import './SignIn.css'

interface ISignIn {
   text: string
}

function SignIn ({text} : ISignIn)  {



    return  (
        <>
        <button className='sign_in'>
            {text}
        </button>

        </>
    )
}


export default SignIn;
