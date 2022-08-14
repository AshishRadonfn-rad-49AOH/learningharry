
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
        setAlert(null)
     }, 1500);
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'learningharry - Dark Mode'
      // setInterval(() => {
      //   document.title = 'learningharry is amazing mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install learningharry now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
        document.title = 'learningharry - Light Mode'
    }
  }
  return (
    <>
    {/* {<Navbar title = "Learnngharry" aboutText = "About"/>} */}
    {/* {<Navbar/>} */}
    <div className="container my-3">
    <Navbar title = "learningharry" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
       <Route exact path="/about" element={ <About/>}/>
       <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
