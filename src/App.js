import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
import RegisteredApproval from './components/RegisteredApproval';
import SearchMember from './components/SearchMember';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/registeruser' element={<RegisterPage/>}/>
        <Route path='/approval' element={<RegisteredApproval/>}/>
        <Route path='/search' element={<SearchMember/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
