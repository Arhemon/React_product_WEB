import { useState } from "react"
import './TitleInput.css'

interface Iinput {
  placeText: string
  text: string
}



function TitleInput({ text, placeText }: Iinput) {
  const [dataTitle, setDataTitle] = useState('Placeholder');

  function handleFocus(): void {
    setDataTitle('Text');
  }

  function handleBlur(): void {
    setDataTitle('Placeholder');
  }

  const [error, setError] = useState(false);

  function inputTextChange(event: any): void {
    setDataTitle(event.target.placeholder);
    setError(event.target.value.length > 20)
  }

  return (
    <form>
      <p className="title_input">{text}</p>
      <input
        onChange={inputTextChange}
        style={{ border: error ? "1.5px solid red" : "" }}
        type="text"
        id="name"
        placeholder={placeText}
        className="container-title-form"
        onFocus={handleFocus}
        onBlur={handleBlur}

      />
      {error && <p className="Error_text">Text error</p>}


    </form>
  );
}



export default TitleInput