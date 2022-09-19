import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UpperCase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleDownClick = () =>{
        //console.log("LowerCase was clicked: " + text);
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () =>{
        //console.log("LowerCase was clicked: " + text);
        let clearText = '';
        setText(clearText);
        props.showAlert("Text cleared successfully!", "success");
    }
    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfullly!", "success");
    }
    const handleExtraSpaces = () =>{
        let exText = text.split(/[ ]+/);
        setText(exText.join(" "))
        props.showAlert("Extra spaces removed successfully!", "success");
    }
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text("new text"); // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Write Your Text Here</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'#d7cfcf': 'white', color: props.mode === 'dark'?'black': '#042743'}} id="myBox" rows="8" placeholder='Enter Your Text Here ...'></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark'?'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>
            <b>{text.split(" ").length} words and {text.length} characters</b>
        </p>
        <p><b>{0.008 * text.split(" ").length} Minutes Read</b></p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
