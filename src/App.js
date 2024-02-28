import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
import RegisteredApproval from './components/RegisteredApproval';
   


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/registeruser' element={<RegisterPage/>}/>
        <Route path='/' element={<RegisteredApproval/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
