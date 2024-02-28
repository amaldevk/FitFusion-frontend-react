import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
   


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/registeruser' element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
