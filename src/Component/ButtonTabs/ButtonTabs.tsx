import './ButtonTabs.css'



interface IButtonTabs {
    text : string,
    isDisabled :boolean
    clickFunction : any
    typeButton : string
    textthird : string
    textsecond : string

}

function ButtonTabs ({typeButton, text,textthird,textsecond, isDisabled, clickFunction}:IButtonTabs)  {



    return  (
        <>
        <div className='container_tabs_button'>
            <button className={typeButton} disabled={isDisabled} onClick={clickFunction}>
            {text}
            </button>
            <button className={typeButton} disabled={isDisabled} onClick={clickFunction}>
            {textsecond}
            </button>
            <button className={typeButton} disabled={isDisabled} onClick={clickFunction}>
            {textthird}
            </button>
        </div>
        

        </>
    )
}


export default ButtonTabs;
