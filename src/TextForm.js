import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
