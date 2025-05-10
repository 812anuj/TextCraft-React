import React, { useState } from "react";

export default function Text(props) {

    const upperBtn = () =>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase.","success")
    }
    const lowerBtn = () =>{
      let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase.","success")
    }
    const clearBtn = () =>{
      setText("");
      props.showAlert("Text Removed.","warning")
    }
    const copyBtn = () =>{
      var text= document.getElementById("Textarea1")
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert("Text Copyed.","success")
    }

    const exSpaceBtn = () => {
         let newText = text.split(/[ ]+/)
         setText(newText.join(" "))
         props.showAlert("Removed Empty Spaces.","success")
    }
    const enteredTxt = (e) => {
        setText(e.target.value);
    }
    const spaces = () => {
      setText(text.split(" ").join(""));
    }
    const [text , setText] = useState('');
  return (

    <>

      <div  className="container my-3">
        <h1 style={{color : props.mode === 'dark'? 'white':'black'}}>{props.heading} </h1>       
        <textarea
          className="form-control"
          id="Textarea1"
          placeholder=" enter text here..."
          rows="8" value ={text} onChange={enteredTxt} style={{backgroundColor : props.mode === 'dark'? 'gray':'white',color : props.mode === 'dark'? 'white':'black'}}
        ></textarea>        
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={upperBtn}>To UpperCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerBtn}>To LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={spaces}>Remove spaces</button>
      <button disabled={text.length === 0} className="btn btn-info  mx-2 my-2" onClick={copyBtn}>Copy</button>
      <button disabled={text.length === 0} className="btn btn-warning  mx-2 my-2" onClick={exSpaceBtn}>Remove Extra Space</button>
      <button disabled={text.length === 0} className="btn btn-danger  mx-2 my-2" onClick={clearBtn}>Clear</button>
      <div className="container my-2" style={{color : props.mode === 'dark'? 'white':'black'}}>
        <h2> Entered Text Summary. </h2>
        <p> {text.split(/\s+/).filter( (element)=>{return element.length !== 0}).length} Words and {text.length} Character.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:'Enter Txt to Preview'}</p>
        <p> Read time: {0.008 * text.split(" ").filter( (element)=>{return element.length !== 0}).length} min.</p>
      </div>
    </>
  );
}
