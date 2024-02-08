import { useState } from "react"
import './TitleInput.css'

interface ITitleInput {
    
}

function TitleInput() {
    const [dataTitle, setDataTitle] = useState('Placeholder');
  
    function handleFocus(): void {
      setDataTitle('Text');
    }
  
    function handleBlur(): void {
      setDataTitle('Placeholder');
    }
  
    return (
      <form>
        <p className="title_input">Title</p>
        <input
          type="text"
          id="name"
          placeholder={dataTitle}
          className="container-title-form"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
    );
  }
  
  

export default TitleInput