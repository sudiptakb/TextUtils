import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#163d64';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About-TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/"  
          element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
