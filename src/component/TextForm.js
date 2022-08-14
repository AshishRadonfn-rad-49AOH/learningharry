import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upperCase!", "success")
    }
   
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowerCase!", "success")
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("Uppercase was clicked")
        setText(event.target.value)
    }

    const handleCopy = () => {
     var text = document.getElementById("myox")
     text.select()
     navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[  ]+/)
      setText(newText.join(" "))
    }

    const [text, setText] = useState('')
  return (
    <>
    <div className ="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
