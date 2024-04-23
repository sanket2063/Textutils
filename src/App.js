import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';

function App() {
  const[Mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const togglemode = ()=>{
    if(Mode==='light')
    {
      setMode('dark');
      showAlert("Dark Mode has been enabled","Success");
    }
    else
    {
      setMode('light');
      showAlert("Light Mode has been enabled","Success");
    }
  }
  return (
   <>
   <Navbar title="TextUtils" mode={Mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
      <TextForm/>
   </div> 
   </>
 );
}

export default App;
