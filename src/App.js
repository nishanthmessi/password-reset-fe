import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  axios.defaults.baseURL = 'https://nm-mern-login.herokuapp.com/api/v1'
	axios.defaults.headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	}

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/reset-password/:resetToken' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

