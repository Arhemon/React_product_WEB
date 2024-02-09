import { useState } from "react"
import './TitleInput.css'



function TitleInput() {
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
        <p className="title_input">Title</p>
        <input
            onChange={inputTextChange}
             style={{border : error ? "1.5px solid red" : "" }}
        // textError = ("Error Text")
          type="text"
          id="name"
          placeholder={dataTitle}
          className="container-title-form"
          onFocus={handleFocus}
          onBlur={handleBlur}
          
        />
              {error && <p className="Error_text">Text error</p>}

              <textarea name=""  ></textarea>

      </form>
    );
  }
  
  

export default TitleInput