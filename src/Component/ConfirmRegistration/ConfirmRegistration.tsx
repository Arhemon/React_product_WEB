import './ConfirmRegistration.css'



interface IConfirmRegistration {
    Text: string
}

function ConfirmRegistration({ Text }: IConfirmRegistration) {
    return (
        <>
            <div className='container_registration'>
                <div className='wrapper_registration'>
                    <p className='registration_text'> {Text}
                    </p>
                    <button className='registration_btn_home'>Go to Home</button>
                </div>
            </div>
        </>
    );
}


export default ConfirmRegistration;






