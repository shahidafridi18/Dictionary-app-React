import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
   <div className='body'>
    <Alert alert={alert}/>
   <Home showAlert={showAlert}/>
   </div>
  );
}

export default App;
