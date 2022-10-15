import './App.css';
import TaxiBill from './Components/TaxiBill';
import Protected from "./ServiceComponent/Protected";
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function check() {
  if (sessionStorage.getItem("bill-generator") == null) {
    console.log("token not find");
    return false;
  }
  console.log("tokeb found");
  return true;
}

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />

    
    <Routes>
        <Route path="/" element={
          <TaxiBill/>
        } exact/>
        {/* <Route path="/taxi-bill" element={
          <Protected isLoggedIn={check()}>
          <TaxiBill/>
        </Protected>
        } exact/>*/}
     </Routes> 
    </BrowserRouter>
      
    
    </>
  );
}

export default App;
