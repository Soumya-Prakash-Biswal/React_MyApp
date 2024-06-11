import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }
    
    const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const deleteText = () => {
      setText("");
      props.showAlert("Text has been deleted","danger");
    }

    const [text,setText] = useState("");

  return (
    <>
      <div className="mb-3 mx-5" 
         
       >
        <label htmlFor="exampleFormControlTextarea1" className="form-label"  style={{ color: props.mode === "dark" ? "white" : "black" }}
>{props.title}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text} > </textarea>
        <button type="button" className="btn btn-primary mx-4 my-2" onClick={handleLowClick} > LowerCase </button>
        <button type="button" className="btn btn-primary mx-4 my-2" onClick={handleUpClick} > UpperCase </button>
        <button type="button" className="btn btn-secondary mx-4 my-2" onClick={deleteText} >DeleteText </button>

      </div>

      <div className = "container" style={{ color: props.mode === "dark" ? "white" : "black" }}
>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words {text.length} characters </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter any text to get the output" }</p>
        
      </div>
    </>
  )
}

