import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Text from './Text';
import About from './About';
import Alert from './Alert'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Enabled.","warning")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white '
      showAlert("Light Mode Enabled.", "info")
    }
  }

  const [alert , setAlert] = useState(null)

  const showAlert = (message , type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 4000);
  }
  
  return (
    <>
    <Router>
     <Navbar title = "TextCraft" about = "About"  mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className="container my-3">
     <Routes>
          <Route exact path="/About"
          element={<About />}
          />
          <Route exact path="/"
         element={ <Text heading = " Enter The Text--->" showAlert={showAlert}  mode={mode} />}
          />
          
        </Routes>
    
     </div>
     
     </Router>
    </>
  );
}

export default App;
