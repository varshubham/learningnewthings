import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleonchange=(event)=>{
        console.log("bhh")
        setText(event.target.value)
    }
    const clicked=()=>{
      setText(window.location.href)
    }
    const backfunction=()=>{
      window.history.back()
    }
    const forwardfunction=()=>{
      console.log(navigator.geolocation.getCurrentPosition)

    }
  const[text,setText] = useState("Enter text here");
  return (
    <div>
        
        <div className="container">
             <h1>{props.heading}</h1>
             <div className="mb-3">
                <textarea id="myBox" rows="8" className="form-control" value={text} onChange={handleonchange}></textarea>
             </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3" onClick={clicked}>mybutton</button>
            <button className="btn btn-primary" onClick={backfunction}>back</button>
            <button className="btn btn-primary mx-3" onClick={forwardfunction}>forward</button>
        </div>
    </div>
  )
}
