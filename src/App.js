import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { useState } from 'react';
import Alert from './Alert';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './About';
function App() {
  let title = <b>My page</b>

  const [mode,setMode] =useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
     <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
            <>
              <Navbar title="demo title"  toggleMode={toggleMode} mode={mode} />
              <Alert  alert={alert} />
              <TextForm showAlert={showAlert} title="Your text here" mode={mode}/>
            </>
        } />
        <Route exact path='/About' element={
          <>
             <Navbar title="demo title"  toggleMode={toggleMode} mode={mode} />
             <Alert  alert={alert} />
            <About mode={mode}/>
          </>
        }/>
      </Routes>
      </BrowserRouter>
       
     </>
  );
}

export default App;
