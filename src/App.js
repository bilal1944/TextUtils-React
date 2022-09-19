//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    // <>
    // <h1>This is me</h1>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Bilal
    //     </a>
    //   </header>
    // </div>
    // </>
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
    {/* <Navbar/> */}
    {/* <Router> */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route path="/about" element={<About />}/> */}
            {/* <Route path="/" element={}/> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
          {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
