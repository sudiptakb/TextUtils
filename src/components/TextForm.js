import React, { useState } from 'react'

export default function TextForm(props) {
    const hanldeUpClick = () =>{
        //setText(text.toUpperCase);
        let newText = text.toUpperCase().trim();
        setText(newText);
        props.showAlert("Uppercase converted successfully.","success");
    }

    const hanldeLowClick = () =>{
        let newText = text.toLowerCase().trim();
        setText(newText);
        props.showAlert("Lowercase converted successfully.","success");
    }

    const hanldeClrClick = () =>{
        let newText = '';
        setText(newText);
    }

    const hanldeRvsClick = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed successfully.","success");
    }

    const hanldeCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied successfully.","success");
    }

    const hanldeOnChange = (event) =>{
       setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value = {text} 
            style = {{backgroundColor: props.mode === 'light'? 'white':'grey', color: props.mode === 'light'? 'black':'white' }} 
            onChange={hanldeOnChange}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={hanldeUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={hanldeLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={hanldeRvsClick}>Reverse Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={hanldeCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={hanldeClrClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'? 'black':'white'}}>
            <h2>Your text sumnmary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.trim().length} characters.</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length > 0? text : 'Enter something to preview it here' }</p>
        </div>
        </>
    )
}
