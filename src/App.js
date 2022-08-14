
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* {<Navbar title = "Learnngharry" aboutText = "About"/>} */}
    {/* {<Navbar/>} */}
    <Navbar title = "Learningharry" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading = "Entet the text to analyze below" mode={mode}/>
    {/* {<About/>} */}
    </div>
    
    </>
  );
}

export default App;
