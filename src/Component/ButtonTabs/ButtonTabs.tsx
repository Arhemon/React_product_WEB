import './ButtonTabs.css'



interface IButtonTabs {
    text : string,
    isDisabled :boolean
    clickFunction : any
    typeButton : string
}

function ButtonTabs ({typeButton, text, isDisabled, clickFunction}:IButtonTabs)  {



    return  (
        <>
        <button className={typeButton} disabled={isDisabled} onClick={clickFunction}>
            {text}
        </button>

        </>
    )
}


export default ButtonTabs;
