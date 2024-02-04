import './ButtonPrimary.css'
import './ButtonSecondary.css'
import './ButtonSecondary2.css'


interface IButtonPrimary {
    text : string,
    isDisabled :boolean
    clickFunction : any
    typeButton : string
}

function ButtonPrimary ({typeButton, text, isDisabled, clickFunction}:IButtonPrimary)  {



    return  (
        <>
        <button className={typeButton} disabled={isDisabled} onClick={clickFunction}>
            {text}
        </button>

        </>
    )
}


export default ButtonPrimary;
