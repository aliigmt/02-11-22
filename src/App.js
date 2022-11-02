import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web from './Components/Routes/Web';
function App() {
  return (
  <div>
  <BrowserRouter>
   <Web/>
   <ToastContainer />
    </BrowserRouter>
  </div>
  );
}

export default App;
